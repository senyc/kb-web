import DarkModeButton from './DarkModeButton';
import HamburgerNavigationMenu from './HamburgerNavigationMenu';
import HeaderLink from './HeaderLink';
import HomeButton from './HomeButton';

export default function HeaderNavigation() {
  return (
    <div className=' flex h-16 w-full flex-row items-center justify-center'>
      <HomeButton />
      <div className=' flex w-full max-w-2xl flex-row items-center justify-end'>
        <nav>
          <ul className='hidden flex-row gap-4 sm:flex'>
            <li>
              <HeaderLink
                href='/qualifications'
                label='Qualifications'
              />
            </li>
            <li>
              <HeaderLink
                href='contact/resumeRequest'
                label='Resume'
              />
            </li>
            <li>
              <HeaderLink
                href='/development'
                label='Development'
              />
            </li>
            <li>
              <HeaderLink
                href='/contact'
                label='Contact'
              />
            </li>
            <li>
              <HeaderLink
                href='/about'
                label='About'
              />
            </li>
          </ul>
          <div className='block sm:hidden'>
            <HamburgerNavigationMenu />
          </div>
        </nav>
        <div className='border-r-text ml-1 mr-1 h-7 border-r-2 dark:border-r-[1px] sm:ml-5' />
        <DarkModeButton />
      </div>
    </div>
  );
}
