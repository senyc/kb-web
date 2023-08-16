import InternshipOne from "./InternshipOne";
import InternshipTwo from "./InternshipTwo";

export default function Experience() {
  return (
    <main className='mt-11 flex h-full flex-col items-center gap-11'>
      <h1 className='border-b-text w-11/12 max-w-3xl border-b-2 pb-2 text-left text-4xl font-bold sm:text-5xl'>
        Professional Experience
      </h1>
      <InternshipTwo />
      <InternshipOne />
    </main>
  );
}
