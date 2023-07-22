import { TextEntry } from '@annotations';

import Welcome from './text/Welcome';

interface PrimaryDisplayProps {
  textDisplay: TextEntry;
}

export default function PrimaryDisplay({ textDisplay }: PrimaryDisplayProps) {
  return (
    <div className='basis-7/12 place-self-end self-center pl-11 pt-64 md:pl-32 xl:pt-0'>
      {
        (() => {
          switch (textDisplay) {
            case TextEntry.Welcome:
              return <Welcome />;
            default:
              return null
          }
        })()
      }
    </div>
  );
}
