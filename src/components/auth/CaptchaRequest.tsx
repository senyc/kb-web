'use client';

import { createRef, ComponentType } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import verifyCaptcha from '@actions/captcha';
import { CaptchaExtensionProps } from '@annotations';
import { getUserAuthorized, setUserAuthorized } from '@actions/context';

export default function CaptchaRequest<P>(WrappedComponent: ComponentType<P>) {
  return (props: Omit<P, keyof CaptchaExtensionProps>) => {
    const recaptchaRef = createRef<ReCAPTCHA>();

    const onClick = async () => {
      if (getUserAuthorized()) {
        window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`;
        return;
      }
      const token = await recaptchaRef.current?.executeAsync();

      if (token) {
        const isCaptchaVerified = await verifyCaptcha(token);
        if (isCaptchaVerified) {
          setUserAuthorized(true);
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

