'use client'

import Email from './icons/Email';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

import CaptchaRequest from './icons/CaptchaRequest';

const EmailCaptcha = CaptchaRequest(Email)
export default function ExternalLinks() {

  return (
    <>
      <GitHub />
      <EmailCaptcha />
      <LinkedIn />
    </>
  );
};
