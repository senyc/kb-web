'use client';

import { useState } from 'react';

import SectionButton from './SectionButton';
import SectionItems from './SectionItems';
import SectionSelection from './SectionSelection';
import SmallTopRightBorder from './SmallTopRightBorder';

export default function ContentSelection() {
  const [currentSection, setCurrentSection] = useState('development')
  const sectionOrder: Record<string, string> = {
    'development': 'experience',
    'experience': 'projects',
    'projects': 'development'
  }

  const onClick = () => {
    setCurrentSection(sectionOrder[currentSection])
  }
  return (
    <div className='xl:pt-96 pt-0 xl:ml-0  pl-8 md:place-self-center xl:place-self-start flex-grow flex flex-col gap-y-12'>
      <div className='pr-5 flex flex-row gap-x-5'>
        <SectionButton
          title={currentSection}
          onClick={onClick}
        />
        <SectionSelection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className='relative flex flex-col ml-6 mt-0 '>
        <SmallTopRightBorder
        />
        <SectionItems
          currentSection={currentSection}
        />
      </div>
    </div>
  )
}
