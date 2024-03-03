'use server';

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
    preferredCommunication: z.string().optional()
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    reasonForContact: formData.get("reasonForContact"),
    additionalComments: formData.get("additionalComments"),
    preferredCommunication: formData.get("preferredCommunication"),
  });

  if (!parse.success) {
    return { status: "failure", message: "Please fill in all required fields" };
  }

  try {
    sendEmail(parse.data);
    return { status: "success", message: "Message sent" };
  } catch {
    return { status: "failure", message: "Message failed to send" };
  }
};

/**
 * @throws {Error} if message fails to send.
 */
async function sendEmail(emailContents: EmailContents) {
  const SibApiV3Sdk = require('@getbrevo/brevo');

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = 'api';

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
  sendSmtpEmail.sender = { "name": "Kyler Bomhof", "email": "kdbomhof@gmail.com" };
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
