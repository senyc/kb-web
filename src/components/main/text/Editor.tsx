import ColoredLine from '../ColoredLine';

export default function Editor() {
  return (
    <>
      <h2 className='mb-4 text-4xl font-semibold sm:text-5xl'>
        {"Text Editor"}
      </h2>
      <div className='relative flex max-w-xl font-medium'>
        <div className='max-h-48'>
          <p className='mb-5'>
            {"I daily drive "}
            <a href="https://github.com/neovim/neovim" target='_blank' className='underline'>
              {"Neovim"}
            </a>
            {". I have also used native Vim, VI, and bit of nano. I previously daily drove VS Code. I have a little bit of experience with the IntelliJ suite as well."}
          </p>
          <p >
            {"I typically just build from Nvim's stable branch. If you would like to take a look at my config you can find that "}
            <a href="https://github.com/senyc/.dotfiles" target='_blank' className='underline'>
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
