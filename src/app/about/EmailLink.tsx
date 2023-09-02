'use client';

import { CaptchaExtensionProps } from "@annotations";
import CaptchaRequest from "@components/auth/CaptchaRequest";

function EmailText({ onClick }: CaptchaExtensionProps) {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer underline'
    >
      email
    </button>
  );
}
export default CaptchaRequest(EmailText)

