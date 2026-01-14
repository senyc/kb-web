'use client';
import HeaderLink from './HeaderLink';
import OutsideClickHandler from 'react-outside-click-handler';
/**
 * This can only be solved via event handlers not a controlled component
 * via: https://github.com/facebook/react/issues/15486
 */
const toggleOpen = () => {
  document.getElementById('hamburger-menu')?.removeAttribute('open');
};

export default function HamburgerNavigationMenu() {
  return (
    <OutsideClickHandler onOutsideClick={toggleOpen}>
      <details id='hamburger-menu' className='dropdown'>
        <summary className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </summary>
        <ul className='menu dropdown-content menu-lg -right-12 top-9 z-[1] mt-3 block rounded-box bg-light-header p-2 shadow dark:bg-dark-header'>
          <li>
            <HeaderLink
              href='/qualifications'
              label='Qualifications'
              underline={false}
              onClick={toggleOpen}
            />
          </li>
          <li>
            <HeaderLink
              href={'/contact/resumeRequest'}
              label='Resume'
              underline={false}
              onClick={toggleOpen}
            />
          </li>
          <li>
            <HeaderLink
              href='/development'
              label='Development'
              underline={false}
              onClick={toggleOpen}
            />
          </li>
          <li>
            <HeaderLink
              href='/contact'
              label='Contact'
              underline={false}
              onClick={toggleOpen}
            />
          </li>
          <li>
            <HeaderLink
              href='/about'
              label='About'
              underline={false}
              onClick={toggleOpen}
            />
          </li>
        </ul>
      </details>
    </OutsideClickHandler>
  );
}
