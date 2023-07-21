import ColoredLine from './ColoredLine';

interface ShowTextItemProps {
  title: string;
}

export default function ShowTextItem({ title }: ShowTextItemProps) {
  return (
    <li className='w-24 min-w-fit cursor-pointer relative text-lg hover:scale-105 mb-3'>
      <button className=''>
        {title}
      </button>
      <ColoredLine
        displayOn='bottom'
      />
    </li>
  );
}
