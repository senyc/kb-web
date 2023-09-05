'use server';

import axios from 'axios';

export default async function verifyCaptha(token: string): Promise<boolean> {
  if (token === null) {
    return false;
  }

  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
    );

    const { success, 'error-codes': errorCodes } = res.data;
    console.log(`reCAPTCHA attempt resulted in ${success}${errorCodes ? ' due to ' + errorCodes : ''}`);
    return success;

  } catch (e) {
    console.log(e);
    return false;
  }
}

