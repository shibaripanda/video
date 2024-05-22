import React from 'react';
import classes from './MoviesScreen.module.css';
import { SimpleGrid } from '@mantine/core';
import { CardItem } from '../CardItem/CardItem.jsx';
import { SelectFilter } from '../SelectFilter/SelectFilter.tsx';
import { SelectFilter2 } from '../SelectFilter2/SelectFilter2.tsx';


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
    <div>
      <div style={{fontSize: '2vmax'}}>Movies</div>


      <div className={classes.filter}>
        <div><SelectFilter label={'Genres'} data={['1', '2']}/></div>
        <div><SelectFilter label={'Release year'} data={['1', '2']}/></div>
        <div><SelectFilter2 label={'Release year'} data={['1', '2']}/></div>
        <div><SelectFilter2 label={'Release year'} data={['1', '2']}/></div>
        <div style={{fontSize: '0.875vmax', font: 'Inter400', color: '#7B7C88'}}>Reset filter</div>
      </div>
      <div className={classes.sort}>
        <div><SelectFilter label={'Sort by'} data={['1', '2']}/></div>
      </div>



      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
        {films}
      </SimpleGrid>
    </div>
  )
}