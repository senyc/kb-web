import ColoredLine from '../ColoredLine';

export default function Typetest() {
  return (
    <>
      <h1 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"typetest"}
      </h1>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-3'>
            {"typetest is a Python command-line tool that aims to be quick (even in Python) and simple to use. Upon invocation it prompts the user to enter one of the default prompts. It also will read from stdin if desired."}
          </p>
          <p className='mb-3'>
            {"During this project (which is still in development) I learned a lot about the Python build environment, and the steps required to make things publicly available on Pypi."}
          </p>
          <p className='mb-3'>
            {"The source code for this can be found on my GitHub "}
            <a href="https://github.com/senyc/typetest-cli" target='_blank' className='underline'>
              here
            </a>
            {"."}
            {"It can also be found on the official Pypi repository "}
            <a href="https://pypi.org/project/typetest-cli/" target='_blank' className='underline'>
              here
            </a>
            {"."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
