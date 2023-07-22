import ColoredLine from '../ColoredLine';

export default function Welcome() {
  return (
    <>
      <h2 className='mb-8 text-5xl font-bold'>
        Kyler Bomhof
      </h2>
      <div className='relative max-w-xl'>
        <p className='mb-5 font-medium '>
          {"Hi, I'm a full stack engineer, with professional experience building web applications."}
        </p>
        <p className='mb-5 font-medium'>
          {"I'm passionate about software architecture and building applications such that they are not just great today, but tomorrow as well."}
        </p>
        <ColoredLine />
      </div>
    </>
  );

}
