
import { useState } from 'react';

import { Section, TextEntry } from '@annotations';

import SectionButton from './SectionButton';
import SectionItems from './SectionItems';
import SectionSelection from './SectionSelection';
import SmallTopRightBorder from './SmallTopRightBorder';

interface ContentSelectionProps {
  displayedTextDispatch: (newState: TextEntry) => void;
}

export default function ContentSelection({ displayedTextDispatch }: ContentSelectionProps) {
  const [currentSection, setCurrentSection] = useState<Section>('Development');
  const sectionOrder: Record<Section, Section> = {
    'Development': 'Experience',
    'Experience': 'Projects',
    'Projects': 'Development'
  };

  const onClick = () => {
    setCurrentSection(sectionOrder[currentSection]);
  };

  return (
    <div className='flex flex-grow flex-col gap-y-12 place-self-center pl-8 pt-0 xl:ml-0'>
      <div className='flex flex-row gap-x-5 pr-5'>
        <SectionButton
          title={currentSection}
          onClick={onClick}
        />
        <SectionSelection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className='relative ml-6 mt-0 flex flex-col'>
        <SmallTopRightBorder
        />
        <SectionItems
          displayedTextDispatch={displayedTextDispatch}
          currentSection={currentSection}
        />
      </div>
    </div>
  );
}
