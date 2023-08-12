interface TechnologiesUsedProps {
  items: Array<string>;
}

export default function TechnologiesUsed({ items }: TechnologiesUsedProps) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {items.map((item, idx) => (
        <li className='list-disc' key={idx}>
          {item}
        </li>
      ))}
    </div>
  );
}
