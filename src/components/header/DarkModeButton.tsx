import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeButton() {
  return (
    <>
      <button
        className='btn-circle btn-ghost btn text-text my-auto duration-150 ease-in hover:scale-105'
      >
          <DarkModeIcon />
          </button>
    </>
  );
}
