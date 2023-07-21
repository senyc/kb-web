interface SectionButtonProps {
  title: string;
  onClick: any;
}

export default function SectionButton({ title, onClick }: SectionButtonProps) {
  return (
    <button 
      className='w-56 hover:scale-105 font-thin text-4xl'
      onClick={onClick}
    >
      {title}
    </button>
  );
}
