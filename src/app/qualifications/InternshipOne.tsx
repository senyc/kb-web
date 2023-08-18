import Image from "next/image";

import haworthHQ from '../../images/haworthHQ.jpg';
import TechnologiesUsed from "@components/information/TechnologiesUsed";

export default function InternshipOne() {
  return (
    <section className='border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4 pt-4'>
      <h2 className='text-left text-xl font-semibold sm:ml-3 sm:text-2xl'>
        Information Technology Internship
      </h2>
      <h3 className='mb-3 italic sm:ml-3'>
        May 2022 - May 2023
      </h3>
      <Image className='mx-auto mb-3 rounded-2xl sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={haworthHQ} alt='haworth headquarters' height={135} quality={100} />
      <div className='text-lg sm:ml-3 sm:mr-3'>
        <p>
          While in this position, I worked with members of the Information Security team to roll out new security software to over 7,000 devices.
        </p>
        <p className='mt-3'>
          I also employed tools such as Microsoft Endpoint and Configuration Manager to efficiently deploy application fixes and collect various hardware and software metrics.
        </p>
        <p className='mt-3'>
          I worked full-time in this position from May to August 2022. I then continued with my projects and assignments remotely until May 2023.
        </p>
        <h3 className='mt-3 text-xl font-semibold'>
          Technologies Used
        </h3>
        <div className=' mt-1'>
          <TechnologiesUsed items={['Bash', 'Config Mgr', 'PowerShell', 'Power Apps', 'SharePoint', 'Git']} />
        </div>
      </div>
    </section>
  );
}
