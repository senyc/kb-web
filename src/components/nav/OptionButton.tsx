import { Section } from '@annotations'

interface OptionButtonProps {
  color?: 'one' | 'two';
  controllingSection: Section;
  currentSection: Section;
  onClick: (newSection: Section) => void;
  onMouseLeave: () => void;
  onMouseOver: (newSection: Section) => void;
}

export default function OptionButton({
  color = 'one',
  controllingSection,
  currentSection,
  onClick,
  onMouseLeave,
  onMouseOver,
}: OptionButtonProps) {
  const shouldBeColored = currentSection === controllingSection;
  return (
    <button
      onClick={() => onClick(controllingSection)}
      onMouseOver={() => onMouseOver(controllingSection)}
      onMouseLeave={onMouseLeave}
      className={`hover:scale-125 w-3 h-3 rounded-full bg${shouldBeColored ? color : '-text'}`}>
    </button>
  );
}
