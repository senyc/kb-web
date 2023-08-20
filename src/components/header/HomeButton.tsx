import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href='/' className='logo terminal-prompt font-mono'>
      cd ~
    </Link >
  );
};
