import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeButton() {
  return (
    <>
      <button
        className='text-text my-auto mr-3 duration-150 ease-in hover:scale-105 md:mr-0'
      >
          <DarkModeIcon />
          </button>
    </>
  );
}
