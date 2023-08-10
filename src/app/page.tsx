import ExternalLinks from "@components/wrapper/ExternalLinks";

export default function Index() {
  return (
    <main className='flex h-full w-full flex-row items-center justify-center overflow-hidden text-center'>
      <div>
        <h1 className='text-4xl font-bold'>
          Kyler Bomhof
        </h1>
        <h2 className='mt-2 text-lg'>
          Full-stack developer
        </h2>
        <div className='mt-2 flex flex-row justify-center gap-6'>
          <ExternalLinks />
        </div>
      </div>
    </main>
  );
}
