import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  label: string;
}
export default function HeaderLink({ href, label }: HeaderLinkProps) {
  return (
    <>
      <Link
        className='text-lg hover:underline'
        href={href}
      >
        {label}
      </Link>
    </>
  );
}
