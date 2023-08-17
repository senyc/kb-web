interface TechnologiesUsedProps {
  items: Array<string>;
}

export default function TechnologiesUsed({ items }: TechnologiesUsedProps) {
  return (
    <ul className='ml-6 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
      {items.map((item, idx) => (
        <li className='list-disc' key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
}
