import DarkModeButton from './DarkModeButton';
import HamburgerNavigationMenu from './HamburgerNavigationMenu';
import HeaderLink from './HeaderLink';
import HomeButton from './HomeButton';

export default function HeaderNavigation() {
  return (
    <div className='flex h-16 w-screen flex-row items-center justify-center'>
      <HomeButton />
      <div className='flex w-full max-w-2xl flex-row justify-end'>
        <nav>
          <ul className='hidden flex-row gap-4 sm:flex'>
            <li>
              <HeaderLink
                href='BomhofKylerResume.pdf'
                label='Resume'
                openInNewTab={true}
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
          <div className='block sm:hidden'>
            <HamburgerNavigationMenu />
          </div>
        </nav>
        <div className='ml-4 border-l-2 border-l-gray-700 pl-4'>
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
