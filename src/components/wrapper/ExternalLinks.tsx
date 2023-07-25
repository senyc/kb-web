import Email from './icons/Email';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import Resume from './icons/Resume';

export default function ExternalLinks() {
  return (
    <div className='absolute right-3 top-3 flex flex-col space-y-3 lg:right-2 lg:top-2 lg:row-end-auto lg:flex-row lg:space-x-4 lg:space-y-0'>
      <Resume />
      <GitHub />
      <LinkedIn />
      <Email />
    </div>
  );
};
