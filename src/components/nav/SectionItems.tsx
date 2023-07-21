import { Section } from '@annotations';
import ShowTextItem from './ShowTextItem';

interface SectionItemsProps {
  currentSection: Section;
}

export default function SectionItems({ currentSection }: SectionItemsProps) {
  return (
    <ul className='bg-dark show-border z-0 h-48 min-h-full pl-4 pt-4'>
      {currentSection === 'Development' ? (
        <>
          <ShowTextItem
            title='Distro'
          />
          <ShowTextItem
            title='Editor'
          />
          <ShowTextItem
            title='Languages'
          />
        </>
      ) : currentSection === 'Experience' ? (
        <>
          <ShowTextItem
            title='Full-stack Internship'
          />
          <ShowTextItem
            title='IT Internship'
          />
          <ShowTextItem
            title='Python Chat bot'
          />
        </>
      ) : currentSection === 'Projects' ? (
        <>
          <ShowTextItem
            title='typetest-cli'
          />
          <ShowTextItem
            title='This site'
          />
        </>
      ) : (
        <> </>
      )}
    </ul>
  );
}
