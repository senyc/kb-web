import { NextResponse } from 'next/server';

import axios from 'axios';

export async function POST(token: string | null) {
  if (token === null) {
    return NextResponse.json({ success: false });
  }

  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`
    );

    const { success, 'error-codes': errorCodes } = res.data;
    console.log(`reCAPTCHA attempt resulted in ${success}${errorCodes ? ' due to ' + errorCodes : ''}`);
    return NextResponse.json({ success: true });

  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false });
  }
}

