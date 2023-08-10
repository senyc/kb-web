import { Button } from "@mui/material";
import Link from "next/link";
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import  Person  from "@mui/icons-material/Person";
import { House } from "@mui/icons-material";
export default function HeaderNavigation() {
  return (
    <ul className='flex w-screen flex-row justify-center'>
      <li>
        <Link href='/'>
          <Button startIcon={<House />}>
            {'Home'}
          </Button>
        </Link>
      </li>
      <li>
        <Link href='experience'>
          <Button startIcon={<WorkIcon />}>
            {'Experience'}
          </Button>
        </Link>
      </li>
      <li>
        <Link href='development'>
          <Button startIcon={<CodeIcon />}>
            {'Development'}
          </Button>
        </Link>
      </li>
      <li>
        <Link href='about'>
          <Button startIcon={<Person />}>
            {'About Me'}
          </Button>
        </Link>
      </li>
      <li>
        <Link href='BomhofKylerResume.pdf'>
          <Button startIcon={<DescriptionIcon />}>
            {'Resume'}
          </Button>
        </Link>
      </li>
    </ul>
  );
}
