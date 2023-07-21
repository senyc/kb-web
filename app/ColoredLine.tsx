interface StyledLineProps {
  displayOn?: 'bottom' | 'left';
}

export default function StyledLine({ displayOn='left' }: StyledLineProps) {
  return displayOn === 'left' ? (
    <span className='w-0.5 absolute top-0 bottom-0 -left-5 styled-line'></span>
  ) : (
    <span className='h-px absolute left-0 -bottom-1 px-11 styled-vertical-line'></span>
  );
}
