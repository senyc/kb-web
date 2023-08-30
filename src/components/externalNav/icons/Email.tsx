'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { createRef } from 'react';

import verifyCaptha from '@app/captcha';

export default function Email() {
  const recaptchaRef = createRef<ReCAPTCHA>();

  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current?.executeAsync();
    token && await verifyCaptha(token);
  };

  return (
    <div>
      <button
        className='duration-150 ease-in hover:scale-110'
        onClick={onSubmitWithReCAPTCHA}
        aria-label='Email'
        title='Email'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path
            d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
          />
          <polyline
            points='22,6 12,13 2,6'
          />
        </svg>
      </button>
      <ReCAPTCHA
        className="w-0"
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
      />
    </div>
  );
}
