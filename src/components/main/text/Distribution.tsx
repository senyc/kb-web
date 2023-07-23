import ColoredLine from '../ColoredLine';
import Image from 'next/image';
import arch from '../../../images/arch.png';

export default function Distribution() {
  return (
    <>
      <h2 className='mb-8 text-5xl font-semibold'>
        {"Current Distribution"}
      </h2>
      <div className='relative ml-5 mr-5 flex max-w-xl  font-medium'>
        <div className='max-h-48'>
          <p className='mb-5'>
            {"Currently I daily drive Arch Linux. I've used Ubuntu, and Pop_OS! in the past, but Arch has been my favorite."}
          </p>
          <p >
            {"If you would like to see my dotfiles, those can be found "}
            <a href="https://github.com/senyc/.dotfiles" target='_blank' className='underline'>
              here
            </a>
            {"."}
          </p>
        </div>
        <Image className='hidden max-h-[138px] max-w-[260px] sm:block' quality={100} src={arch} alt='arch' />
        <ColoredLine />
      </div >
    </>
  );
}
