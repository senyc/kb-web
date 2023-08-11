import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import HeaderLink from "./HeaderLink";

function HomeButton() {
  return (
    <button className='  hover:scale-105'>
      <Link href='/'>
        <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#a9a9b3" />
          <text x="50" y="65" textAnchor="middle" fill="black" fontSize="55" fontFamily="mono">
            KB
          </text>
        </svg>
      </Link >
    </button>
  );
};

export default function HeaderNavigation() {
  return (
    <div className='flex h-16 w-screen flex-row items-center justify-center'>
      <HomeButton />
      <div className=' flex w-full max-w-2xl flex-row justify-end'>
        <nav className='border-r-2 border-gray-600 pr-4'>
          <ul className='flex flex-row gap-4'>
            <li className=''>
              <HeaderLink
                href='BomhofKylerResume.pdf'
                label='Resume'
              />
            </li>
            <li>
              <HeaderLink
                href='experience'
                label='Experience'
              />
            </li>
            <li>
              <HeaderLink
                href='development'
                label='Development'
              />
            </li>
            <li>
              <HeaderLink
                href='about'
                label='About'
              />
            </li>
          </ul>
        </nav>
        <div className='pl-4'>
          <DarkModeButton />
        </div>

      </div>
    </div>
  );
}
