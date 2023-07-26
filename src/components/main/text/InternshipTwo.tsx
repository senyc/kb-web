import ColoredLine from '../ColoredLine';

export default function InternshipTwo() {
  return (
    <>
      <h1 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"Full-stack Internship"}
      </h1>
      <p className='mb-3 italic'>
        May 2023 - Present
      </p>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-3'>
            {"I presently work at Auto Owners Insurance on a project that aims to streamline a previously exhausting and cumbersome process for clients across the country."}
          </p>
          <p className='mb-3'>
            {"As part of a collaborative team, I work alongside business analysts, quality assurance professionals, architects, and fellow developers, following the Scrum process. Along with my team I've worked hard to balance scalability, testability and extensability with teh "}
          </p>
          <p className='mb-3'>
            {"Throughout this experience, our team has primarily worked with a Node backend, leveraging Nest.js in conjunction with SQL Server. For the frontend, we've utilized React.js and Typescript. Code reviews play a significant role in our development process, which has allowed me to both review and have my code reviewed."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
