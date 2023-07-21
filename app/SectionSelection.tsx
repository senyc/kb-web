import { Dispatch, SetStateAction, useState } from 'react';

import OptionButton from './OptionButton';

interface SectionSelectionProps {
  setCurrentSection: Dispatch<SetStateAction<string>>;
  currentSection: string;
}

export default function SectionSelection({ setCurrentSection, currentSection }: SectionSelectionProps) {
  const [fallBackSection, setFallBackSection] = useState(currentSection)

  const onClick = (newSection: string) => {
    setFallBackSection(newSection)
  }

  const onMouseLeave = () => {
    setCurrentSection(fallBackSection)
  }

  const onMouseOver = (newSection: string) => {
    setFallBackSection(currentSection)
    setCurrentSection(newSection)
  }

  return (
    <>
      <div className='flex flex-col gap-y-1 justify-end'>
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          controllingSection='development'
          color='one'
          currentSection={currentSection}
        />
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          color='two'
          controllingSection='experience'
          currentSection={currentSection}
        />
        <OptionButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          color='one'
          controllingSection='projects'
          currentSection={currentSection}
          
        />
      </div>
    </>
  )
}
