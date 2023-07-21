import Bio from "./Bio";
import BottomRightCorner from "./BottomRightCorner";
import ContentSelection from "./ContentSelection";
import ExternalLinks from "./ExternalLinks";
import TopLeftCorner from "./TopLeftCorner";

export default function Index() {
  return (
    <div className='xl:h-5/6 w-[1280px] h-screen xl:min-w-max relative flex flex-col xl:flex-row grow xl:grow-0 '>
      <ExternalLinks />
      <div className='pt-64 xl:pt-0 md:pl-32 pl-11 place-self-end self-center basis-7/12'>
        <Bio />
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
