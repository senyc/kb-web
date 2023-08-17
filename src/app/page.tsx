import ExternalLinks from "@components/externalNav/ExternalLinks";

export default function Index() {
  return (
    <main className='flex h-full flex-row items-center justify-center text-center'>
      <div>
        <h1 className='text-5xl font-bold'>
          Kyler Bomhof
        </h1>
        <h2 className='mt-5 text-lg'>
          Full-stack software developer
        </h2>
        <div className='mt-2 flex flex-row justify-center gap-6'>
          <ExternalLinks />
        </div>
      </div>
    </main>
  );
}
