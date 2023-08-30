'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';

export default async function verifyCaptha(token: string | null) {
  const res = await axios.get(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
  );

  if (res.data.success) {
    redirect('mailto:kdbomhof@gmail.com');
  } else {
    console.log(`reCAPTCHA attempt resulted in ${res.data.success}${res.data['error-codes'] && ' due to ' + res.data['error-codes']}`)
  }
}
