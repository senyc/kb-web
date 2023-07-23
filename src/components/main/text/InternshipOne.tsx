import ColoredLine from "../ColoredLine";

export default function InternshipOne() {
  return (
    <>
      <h1 className=' mb-1 text-5xl font-semibold'>
        {"IT Internship"}
      </h1>
      <p className='mb-3 italic'>
        May 2022 - May 2023
      </p>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-4'>
            {"I had the good fortune to work on the Client Engineering team at Haworth full time from May to August 2022, then remote until May of 2023 I worked part time."}
          </p>
          <p className='mb-4'>
            {"While in this position I worked with the Information Security team to roll out new security software across the organization. I utilized various system administration tools like Microsoft Endpoint and Configuration Manager to deploy application fixes to devices company-wide (in surplus of 7,000)"}
          </p>
          <p className='mb-4'>
            {"During this experience I got to work with Powershell, Endpoint, SharePoint, Microsoft's power platform, Azure AD, Git, and others."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
