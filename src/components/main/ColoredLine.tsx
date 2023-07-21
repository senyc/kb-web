interface StyledLineProps {
  displayOn?: 'bottom' | 'left';
}

export default function StyledLine({ displayOn='left' }: StyledLineProps) {
  return displayOn === 'left' ? (
    <span className='styled-line absolute -left-5 bottom-0 top-0 w-0.5'></span>
  ) : (
    <span className='styled-vertical-line absolute -bottom-1 left-0 h-px px-11'></span>
  );
}
