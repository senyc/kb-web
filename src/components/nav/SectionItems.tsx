import { Section, TextEntry } from '@annotations';
import ShowTextItem from './ShowTextItem';

interface SectionItemsProps {
  currentSection: Section;
  displayedTextDispatch: (newState: TextEntry) => void;
}

export default function SectionItems({ currentSection, displayedTextDispatch }: SectionItemsProps) {
  return (
    <ul className='bg-dark show-border z-0 h-32 w-52 pl-4 pt-4'>
      {currentSection === 'Development' ? (
        <>
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.Distro)}
            title='Distro'
          />
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.Editor)}
            title='Editor'
          />
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.Languages)}
            title='Languages'
          />
        </>
      ) : currentSection === 'Experience' ? (
        <>
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.InternshipTwo)}
            title='Full-stack Internship'
          />
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.InternshipOne)}
            title='IT Internship'
          />
        </>
      ) : currentSection === 'Projects' ? (
        <>
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.Typetest)}
            title='typetest-cli'
          />
          <ShowTextItem
            onClick={() => displayedTextDispatch(TextEntry.Site)}
            title='This site'
          />
        </>
      ) : (
        <> </>
      )}
    </ul>
  );
}
