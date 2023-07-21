import BottomRightCorner from '@components/wrapper/BottomRightCorner';
import ContentSelection from '@components/nav/ContentSelection';
import ExternalLinks from '@components/wrapper/ExternalLinks';
import PrimaryText from '@components/main/PrimaryText';
import TopLeftCorner from '@components/wrapper/TopLeftCorner';

export default function Index() {
  return (
    <div className='relative flex h-screen w-[1280px] grow flex-col xl:h-4/6 xl:min-w-max xl:grow-0 xl:flex-row'>
      <ExternalLinks />
      <div className='basis-7/12 place-self-end self-center pl-11 pt-64 md:pl-32 xl:pt-0'>
        <PrimaryText />
      </div>
      <BottomRightCorner
        height={300}
        width={300}
      />
      <TopLeftCorner
        height={300}
        width={300}
      />
      <ContentSelection />
    </div >
  );
}
