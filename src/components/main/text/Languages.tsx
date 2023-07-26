import ColoredLine from '../ColoredLine';

export default function Languages() {
  return (
    <>
      <h2 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"Languages"}
      </h2>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div>
          <p className='mb-4'>
            {"I would consider myself an expert in Python and proficient in Typescript, Bash, and C. Additionally, I have experience with Lua and C++."}
          </p>
          <p className='mb-4'>
            {"The majority of my Typescript use has been with React.js, so I am also fluent with CSS and most variations of markup."}
          </p>
          <p> 
            {"To use these languages I regularly interface with the following set of tools: Git, Docker, npm (pnpm), pip3, and most standard Linux command-line utilities."}
          </p>
        </div>
        <ColoredLine />
      </div >
    </>
  );
}
