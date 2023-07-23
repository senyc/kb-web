import Email from './icons/Email';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

export default function ExternalLinks() {
  return (
    <div className='absolute right-3 flex flex-col space-y-3 lg:right-0 lg:top-0 lg:flex-row lg:space-x-4 lg:space-y-0'>
      <GitHub />
      <LinkedIn />
      <Email />
    </div>
  );
};
