import { Dispatch, SetStateAction, useState } from 'react';

import { Section } from '@annotations'
import OptionButton from './OptionButton';

interface SectionSelectionProps {
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  currentSection: Section;
}

export default function SectionSelection({ setCurrentSection, currentSection }: SectionSelectionProps) {
  const [fallBackSection, setFallBackSection] = useState<Section>(currentSection)

  const onClick = (newSection: Section) => {
    setFallBackSection(newSection)
  }

  const onMouseLeave = () => {
    setCurrentSection(fallBackSection)
  }

  const onMouseOver = (newSection: Section) => {
    setFallBackSection(currentSection)
    setCurrentSection(newSection)
  }

  return (
    <>
      <div className='flex flex-col justify-end gap-y-1'>
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          controllingSection='Development'
          color='one'
          currentSection={currentSection}
        />
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          color='two'
          controllingSection='Experience'
          currentSection={currentSection}
        />
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          color='one'
          controllingSection='Projects'
          currentSection={currentSection}
          
        />
      </div>
    </>
  )
}
