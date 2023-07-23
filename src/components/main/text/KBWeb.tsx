import ColoredLine from '../ColoredLine';

export default function KBWeb() {
  return (
    <>
      <h1 className=' mb-6 text-5xl font-semibold'>
        {"kylerbomhof.com"}
      </h1>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-4'>
            {"This site is built with Vercel's NextJS framework and styled using tailwindcss, it is also deployed via Vercel's deployment service."}
          </p>
          <p className='mb-4'>
            {"During this process I got to delve into mobile-first design. Most of my previous react experience has been for desktop web-apps so this was a fun change of pace."}
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
