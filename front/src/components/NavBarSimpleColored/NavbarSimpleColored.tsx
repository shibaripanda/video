import React from 'react';
import { useState } from 'react';
import classes from './NavbarSimpleColored.module.css';
import { Image } from '@mantine/core'
import pic from '../../img/16.png';


const data = [
  { link: '', label: 'Movies' },
  { link: '', label: 'Ratied movies' },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState('Movies');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <div className={classes.header}>
            <div><Image src={pic} alt="Avatar" h='2vmax' w="auto" /></div>
            <div className={classes.icontext}>ArrowFlicks</div>
            <div></div>
            <div></div>
        </div>
        {links}
      </div>
    </nav>
  );
}