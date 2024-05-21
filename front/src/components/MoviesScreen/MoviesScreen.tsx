import React from 'react';
// import classes from './MoviesScreen.module.css';
import { SimpleGrid } from '@mantine/core';
import { CardItem } from '../CardItem/CardItem.jsx';


const data = [
  {
    title: 'The Green Mile',
    year: 1999,
    rate: 9.3,
    view: '2.9M',
    genre: ['Drama', 'Crime', 'Fantasy']
  },
  {
    title: 'The Green Mile',
    year: 1999,
    rate: 9.3,
    view: '2.9M',
    genre: ['Drama', 'Crime', 'Fantasy']
  },
  {
    title: 'The Green Mile',
    year: 1999,
    rate: 9.3,
    view: '2.9M',
    genre: ['Drama', 'Crime', 'Fantasy']
  }
];

export function MoviesScreen() {
  
  const films = data.map((film, index) => <div key={index}><CardItem film={film}/></div>);

  return(
    <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
      {films}
    </SimpleGrid>
  )
}