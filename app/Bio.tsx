import StyledLine from './ColoredLine';

export default function Bio() {
  return (
    <>
      <h2 className='text-5xl font-bold mb-8'>
        Kyler Bomhof
      </h2>
      <div className='relative max-w-xl'>
        <p className='mb-5 font-medium '>
          {"Hi, I'm a full stack engineer, with professional experience building web applications."}
        </p>
        <p className='mb-5 font-medium'>
          {"I'm passionate about software architecture and building applications such that they are not just great today, but tomorrow as well."}
        </p >
        <StyledLine />
      </div>
    </>
  )
}
