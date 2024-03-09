'use server';

import axios from "axios";
import { z } from "zod";

interface EmailContents {
  name: string;
  email: string;
  phone?: string;
  reasonForContact: string;
  additionalComments?: string;
  preferredCommunication?: string;
}

export async function sendContact(prevState: { message: string, status: string; }, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    reasonForContact: z.string(),
    additionalComments: z.string().optional(),
    preferredCommunication: z.string().optional(),
    captchaToken: z.string()
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    reasonForContact: formData.get("reasonForContact"),
    additionalComments: formData.get("additionalComments"),
    preferredCommunication: formData.get("preferredCommunication"),
    captchaToken: formData.get("g-recaptcha-response"),
  });
  if (!parse.success) {
    return { status: "failure", message: "Please fill in all required fields" };
  }

  try {
    await checkCaptchaValidity(parse.data.captchaToken)
    // console.log("sent email")
    await sendEmail(parse.data);
    return { status: "success", message: "Message sent" };
  } catch (e) {
    console.log(e)
    return { status: "failure", message: "Message failed to send" };
  }
};

/**
* @throws {Error} if user fails captcha
*/
async function checkCaptchaValidity(token: string | null) {
  if (token == null) {
    throw new Error("token is null")
  }
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
  );

  const { success, 'error-codes': errorCodes } = res.data;
  console.log(`reCAPTCHA attempt resulted in ${success}${errorCodes ? ' due to ' + errorCodes : ''}`);
  if (!success) {
    throw new Error("failed captcha")
  }
}

/**
 * @throws {Error} if message fails to send.
 */
async function sendEmail(emailContents: EmailContents) {
  const SibApiV3Sdk = require('@getbrevo/brevo');

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.params = {
    "email": emailContents.email,
    "name": emailContents.name,
    "phone": emailContents.phone,
    "preferredCommunication": emailContents.preferredCommunication,
    "reasonForContact": emailContents.reasonForContact,
    "additionalComments": emailContents.additionalComments,
  };

  sendSmtpEmail.subject = "kylerbomhof.com contact form";
  sendSmtpEmail.sender = { "name": "Kyler Bomhof", "email": "contact@jasontasks.com" };
  sendSmtpEmail.to = [{ "email": "kdbomhof@gmail.com", "name": "Kyler Bomhof" }];
  sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <p>
          Email: {{params.email}}<br>
          name of sender: {{params.name}}<br>
          reason for contact: {{params.reasonForContact}}<br>
          phone number: {{params.phone}}<br>
          preferred mode of communication: {{params.preferredCommunication}}<br>
          additional comments: {{params.additionalComments}}<br>
        </p>
      </body>
    </html>
`;

  const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
  if (data.response.statusCode > 299) {
    throw new Error("Request failed");
  }
}
