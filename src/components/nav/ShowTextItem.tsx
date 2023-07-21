import ColoredLine from '@components/main/ColoredLine';

interface ShowTextItemProps {
  title: string;
}

export default function ShowTextItem({ title }: ShowTextItemProps) {
  return (
    <li className='relative mb-3 w-24 min-w-fit cursor-pointer text-lg hover:scale-105'>
      <button>
        {title}
      </button>
      <ColoredLine
        displayOn='bottom'
      />
    </li>
  );
}
