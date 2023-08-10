import AboutMe from "./AboutMe";

export default function About() {
  return (
    <>
      <main className='flex h-full w-full flex-row items-center justify-center overflow-hidden'>
        <section className='w-11/12 max-w-3xl'>
          <h1 className='mb-8 text-left text-4xl font-semibold sm:text-5xl'>
            About Kyler
          </h1>
          <AboutMe />
        </section>
      </main>
    </>
  );
}
