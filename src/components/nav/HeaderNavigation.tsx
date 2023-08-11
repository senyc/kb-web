import DarkModeButton from './DarkModeButton';
import HeaderLink from './HeaderLink';
import HomeButton from './HomeButton';


export default function HeaderNavigation() {
  return (
    <div className='flex h-16 w-screen flex-row items-center justify-center'>
      <HomeButton />
      <div className='flex w-full max-w-2xl flex-row justify-end'>
        <nav className='border-r-2 border-gray-600 pr-4'>
          <ul className='flex flex-row gap-4'>
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
        </nav>
        <div className='pl-4'>
          <DarkModeButton />
        </div>

      </div>
    </div>
  );
}
