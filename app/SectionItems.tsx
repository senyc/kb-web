import ShowTextItem from './ShowTextItem';

interface SectionItemsProps {
  currentSection: string;
}
export default function SectionItems({ currentSection }: SectionItemsProps) {
  return (
    <ul className='z-0 pt-4 pl-4 bg-dark show-border'>
      {currentSection === 'development' ? (
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
      ) : currentSection === 'experience' ? (
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
      ) : currentSection === 'projects' ? (
        <>
          <ShowTextItem
            title='typetest-cli'
          />
          <ShowTextItem
            title='This site'
          />
        </>
      ) : <> </>
      }
    </ul>
  );
}
