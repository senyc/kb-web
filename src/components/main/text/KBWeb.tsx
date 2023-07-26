import ColoredLine from '../ColoredLine';

export default function KBWeb() {
  return (
    <>
      <h1 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"kylerbomhof.com"}
      </h1>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-4'>
            {"This site is built with Vercel's Next.js framework and styled using Tailwind CSS. It is currently deployed with Vercel."}
          </p>
          <p className='mb-4'>
            {"During this process, I got to delve into mobile-first design. Most of my previous React experience has been focused on desktop web apps, so this was a fun change of pace."}
          </p>
          <p className='mb-4'>
            {"The source code for this can be found on my GitHub "}
            <a href="https://github.com/senyc/kb-web" target='_blank' className='underline'>
              here
            </a>
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
