interface OptionButtonProps {
  color?: 'one' | 'two';
  controllingSection: string;
  currentSection: string;
  onClick: (newSection: string) => void;
  onMouseLeave: () => void;
  onMouseOver: (newSection: string) => void;
}
export default function OptionButton({
  color = 'one',
  controllingSection,
  currentSection,
  onClick,
  onMouseLeave,
  onMouseOver,
}: OptionButtonProps) {
  const shouldColor = currentSection === controllingSection;
  return (
    <button
      onClick={() => onClick(controllingSection)}
      onMouseOver={() => onMouseOver(controllingSection)}
      onMouseLeave={onMouseLeave}
      className={`hover:scale-125 w-3 h-3 rounded-full bg${shouldColor ? color : '-text'}`}>
    </button>
  );
}
