'use server';

import axios from 'axios';

export default async function verifyCaptha(token: string | null): Promise<boolean> {
  if (token === null) {
    return false ;
  }

  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
  );

  console.log(`reCAPTCHA attempt resulted in ${res.data.success}${res.data['error-codes'] !== undefined ? ' due to ' + res.data['error-codes'] : ''}`);

  return res.data.success;
}

