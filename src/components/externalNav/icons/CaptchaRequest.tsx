'use client';

import { useState, createRef, ComponentType } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import verifyCaptcha from '@app/captcha';
import { CaptchaExtensionProps } from '@annotations';

export default function CaptchaRequest<P>(WrappedComponent: ComponentType<P>) {
  return (props: Omit<P, keyof CaptchaExtensionProps>) => {
    const [allowEmailAccess, setAllowEmailAccess] = useState<boolean>(false);
    const recaptchaRef = createRef<ReCAPTCHA>();

    const onClick = async () => {
      if (allowEmailAccess) {
        window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`;
        return;
      }
      const token = await recaptchaRef.current?.executeAsync();

      if (token) {
        const isCaptchaVerified = await verifyCaptcha(token);
        if (isCaptchaVerified) {
          setAllowEmailAccess(true);
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
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
        />
      </>
    );
  };

};

