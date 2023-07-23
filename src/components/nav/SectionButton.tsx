interface SectionButtonProps {
  title: string;
  onClick: any;
}

export default function SectionButton({ title, onClick }: SectionButtonProps) {
  return (
    <button 
      className=' text-3xl font-thin hover:scale-105 sm:text-4xl'
      onClick={onClick}
    >
      {title}
    </button>
  );
}
