import AboutMe from "./AboutMe";

export default function About() {
  return (
    <>
      <main className='flex h-full w-full flex-row items-center justify-center'>
        <section className='mt-16 w-11/12 max-w-3xl sm:mt-0'>
          <h1 className='mb-8 text-left text-4xl font-semibold sm:text-5xl'>
            About Kyler
          </h1>
          <AboutMe />
        </section>
      </main>
    </>
  );
}
