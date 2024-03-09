import Education from "./Education";
import InternshipOne from "./InternshipOne";
import InternshipTwo from "./InternshipTwo";

export default function Experience() {
  return (
    <div className='mt-11 flex flex-col items-center gap-4'>
      <h1 className='border-b-text mb-1 w-11/12 max-w-3xl border-b-2 pb-2 text-left text-3xl font-bold sm:text-4xl'>
        Professional Experience
      </h1>
      <InternshipTwo />
      <InternshipOne />
      <h1 className='border-b-text mb-1 mt-16 w-11/12 max-w-3xl border-b-2 pb-2 text-left text-3xl font-bold sm:text-4xl'>
        Education
      </h1>
      <Education />
    </div >
  );
}
