import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  label: string;
  openInNewTab?: boolean;
}
export default function HeaderLink({ href, label, openInNewTab = false }: HeaderLinkProps) {
  return (
    <>
      <Link
        className='text-lg hover:underline'
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
      >
        {label}
      </Link>
    </>
  );
}
