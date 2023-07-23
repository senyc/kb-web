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
    <div className='mb-24 ml-9 flex flex-grow flex-col gap-y-12 sm:ml-0 sm:self-center xl:mb-0 '>
      <div className='flex w-52 flex-row gap-x-2'>
        <SectionSelection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <SectionButton
          title={currentSection}
          onClick={onClick}
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
