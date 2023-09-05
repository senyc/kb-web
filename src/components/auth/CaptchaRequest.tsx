'use client';

import { createRef, ComponentType } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { CaptchaExtensionProps } from '@annotations';

export default function CaptchaRequest<P>(WrappedComponent: ComponentType<P>) {
  return (props: Omit<P, keyof CaptchaExtensionProps>) => {
    const recaptchaRef = createRef<ReCAPTCHA>();

    const onClick = async () => {
      const token = await recaptchaRef.current?.executeAsync();

      if (token) {
        const isCaptchaVerified = await fetch('/api/captcha',
          {
            method: 'POST',
            headers: {
              'Content-Type': "application/json",
            },
            body: JSON.stringify(token),
          }
        );
        const res = await isCaptchaVerified.json();
        if (res && res.success) {
          window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`;
        }
      }
    };

    return (
      <>
        <WrappedComponent
          {...props as P}
          onClick={onClick}
        />
        <ReCAPTCHA
          className='absolute'
          ref={recaptchaRef}
          size='invisible'
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
        />
      </>
    );
  };

};

