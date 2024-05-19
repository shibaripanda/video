import React from 'react';
import { useState } from 'react';
import { Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarSimpleColored.module.css';


const data = [
  { link: '', label: 'Movies' },
  { link: '', label: 'Ratied movies' },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState('Billing');

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
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} inverted style={{ color: 'white' }} />
        </Group>
        {links}
      </div>
    </nav>
  );
}
