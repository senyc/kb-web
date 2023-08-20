interface LeftTabArrowProps {
  onClick: () => void;
}

export default function LeftTabArrow({ onClick }: LeftTabArrowProps) {
  return (
    <button onClick={onClick} className="border-light-text dark:border-dark-text transform rounded-full border p-2 transition duration-150 ease-in hover:scale-110 hover:bg-gray-100">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
