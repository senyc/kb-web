import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  label: string;
  openInNewTab?: boolean;
  className?: string;
}
export default function HeaderLink({ href, label, openInNewTab = false, className = '' }: HeaderLinkProps) {
  return (
    <>
      <Link
        className={`text-lg hover:underline ${className}`}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
      >
        {label}
      </Link>
    </>
  );
}
