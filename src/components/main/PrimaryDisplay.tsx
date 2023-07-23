import { TextEntry } from '@annotations';

import Distribution from './text/Distribution';
import Editor from './text/Editor';
import InternshipOne from './text/InternshipOne';
import InternshipTwo from './text/InternshipTwo';
import Languages from './text/Languages';
import Welcome from './text/Welcome';
import Typetest from './text/Typetest';
import KBWeb from './text/KBWeb';

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
            case TextEntry.Distro:
              return <Distribution />;
            case TextEntry.Editor:
              return <Editor />;
            case TextEntry.Languages:
              return <Languages />;
            case TextEntry.InternshipOne:
              return <InternshipOne />;
            case TextEntry.InternshipTwo:
              return <InternshipTwo />;
            case TextEntry.Typetest:
              return <Typetest />;
            case TextEntry.Site:
              return <KBWeb />;
            default:
              return <Welcome />;
          }
        })()
      }
    </div>
  );
}
