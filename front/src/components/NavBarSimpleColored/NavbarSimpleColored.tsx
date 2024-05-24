import React from 'react';
import { useState } from 'react';
import classes from './NavbarSimpleColored.module.css';
import { Image } from '@mantine/core'
import pic from '../../img/arrow.png';
import { fix } from '../../fix';


const data = [
  { link: `http://${fix.link}/`, label: 'Movies' },
  { link: `http://${fix.link}/raited`, label: 'Ratied movies' },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState(sessionStorage.getItem('page') ? sessionStorage.getItem('page') : 'Movie')

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        sessionStorage.setItem('page', item.label)
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
            <div className={classes.icon}>
              <Image className={classes.icon1} src={pic} alt="Avatar" h='1.380625vmax' w="auto" />
              <Image className={classes.icon2} src={pic} alt="Avatar" h='1.380625vmax' w="auto" />
              <Image className={classes.icon3} src={pic} alt="Avatar" h='1.380625vmax' w="auto" />
              <Image className={classes.icon4} src={pic} alt="Avatar" h='1.380625vmax' w="auto" />
            </div>
            <div className={classes.icontext}>ArrowFlicks</div>
            <div></div>
            <div></div>
        </div>
        {links}
      </div>
    </nav>
  );
}