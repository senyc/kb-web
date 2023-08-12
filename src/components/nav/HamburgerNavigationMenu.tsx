'use client';
import { MouseEvent, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HeaderLink from './HeaderLink';

export default function HamburgerNavigationMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-text'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{ mt: "1px", "& .MuiMenu-paper": { backgroundColor: "#252627", } }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <HeaderLink
            href='BomhofKylerResume.pdf'
            label='Resume'
            openInNewTab={true}
            className='text-text'
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HeaderLink
            href='experience'
            label='Experience'
            className='text-text'
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HeaderLink
            href='development'
            className='text-text'
            label='Development'
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HeaderLink
            href='about'
            label='About'
            className='text-text'
          />
        </MenuItem>
      </Menu>
    </>
  );
}
