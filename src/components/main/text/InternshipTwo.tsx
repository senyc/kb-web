import ColoredLine from '../ColoredLine';

export default function InternshipTwo() {
  return (
    <>
      <h1 className=' mb-1 text-5xl font-semibold'>
        {"Full-stack Internship"}
      </h1>
      <p className='mb-3 italic'>
        May 2023 - Present
      </p>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-3'>
            {"I presently work at a Auto Owners Insurance on a project that will be used by clients around the country to streamline a process that has previously been exhausting and cumbersome."}
          </p>
          <p className='mb-3'>
            {"I've been on a team with business analysts, quality assurance, architects as well as other developers while following the scrum process. All to put fourth the best quality product that fulfils our stakeholders requests but still remains scalable and extendable."}
          </p>
          <p className='mb-3'>
            {"During this experience the team been primarily has worked with a Node backend, using Nest in conjunction with SQL server. For our front-end we've used react.js and Typescript. The team puts a big emphasis on code reviews where I've been able to review, and have my code reviewed."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
