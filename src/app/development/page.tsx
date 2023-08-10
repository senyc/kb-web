import ArrowTab from "../ArrowTab";
import Backend from "./Backend";
import Deploy from "./Deploy";
import Design from "./Design";
import Frontend from "./Frontend";
import Style from "./Style";
import System from "./System";
import Testing from "./Testing";
import VersionControl from "./VersionControl";

export default function Development() {
  const availableTabs = ['Style', 'Frontend', 'Backend', 'Deploy', 'System', 'VC', 'Design', 'Testing'];
  return (
    <main>
      <ArrowTab
        tabs={availableTabs}
        tabContent={
          [
            <div 
              className='slide-in-from-left'
              key={'1'}
            >
            <Style />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'2'}
            >
            <Frontend />
            </div>,
            <div 
              key={'3'}
              className='slide-in-from-left'>
            <Backend />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'4'}
            >
            <Deploy />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'5'}
            >
            <System />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'6'}
            >
            <VersionControl />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'7'}
            >
            <Design />
            </div>,
            <div 
              className='slide-in-from-left'
              key={'8'}
            >
            <Testing />
            </div>,
          ]
        }
      />
    </main>
  );
}
