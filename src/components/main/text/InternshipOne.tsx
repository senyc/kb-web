import ColoredLine from "../ColoredLine";

export default function InternshipOne() {
  return (
    <>
      <h1 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"IT Internship"}
      </h1>
      <p className='mb-3 italic'>
        May 2022 - May 2023
      </p>
      <div className='relative ml-5 mr-5 flex max-w-xl font-medium'>
        <div>
          <p className='mb-4'>
            {"I had the good fortune to work full-time on the Client Engineering team at Haworth from May to August 2022, and then continued remotely until May 2023, working part-time."}
          </p>
          <p className='mb-4'>
            {"While in this position I worked with the Information Security team to roll out new security software across the organization. I also employed tools such as Microsoft Endpoint and Configuration Manager to efficiently deploy application fixes to over 7,000 devices company-wide."}
          </p>
          <p className='mb-4'>
            {"During this experience I was able to work with Powershell, Endpoint, SharePoint, Microsoft's power platform, Azure AD, Git, and others."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
