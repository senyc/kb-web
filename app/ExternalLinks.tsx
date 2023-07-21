import Email from "./icons/Email";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";

export default function ExternalLinks() {
  return (
    <div className='absolute right-0 top-0 flex space-x-4'>
      <GitHub />
      <LinkedIn />
      <Email />
    </div>
  );
};
