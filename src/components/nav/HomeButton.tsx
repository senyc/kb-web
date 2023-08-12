import Link from "next/link";

export default function HomeButton() {
  return (
    <button aria-label='Home' className='ml-3 hover:scale-105 md:ml-0'>
      <Link href='/'>
        <svg width='30' height='30' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='50' cy='50' r='45' fill='#a9a9b3' />
          <text x='50' y='70' textAnchor='middle' fill='black' fontSize='55' fontFamily='mono'>
            KB
          </text>
        </svg>
      </Link >
    </button>
  );
};
