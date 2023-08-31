'use client';

import { useState, createRef, ButtonHTMLAttributes } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import verifyCaptcha from '@app/captcha';

export default function CaptchaRequest(WrappedComponent: any) {
  return (props: any) => {
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
      <div>
        <WrappedComponent
          {...props}
          onClick={onClick}
        />
        <ReCAPTCHA
          className="w-0"
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
        />
      </div>
    );
  };

};

