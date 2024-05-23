import { Pagination, SimpleGrid } from '@mantine/core';
import React from 'react';
import { CardItem } from '../CardItem/CardItem';
import classes from './PaginationLine.module.css';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export function PaginationLine({datain, genres, updataPage, activePage}) {
  const maxPage = (countPages: number) => {
    if(countPages > 500) return 500
    return countPages
  }
  if(datain.results.length){
      const data = chunk(datain['results'], 20)
      const items = data[0].map((film, index) => <div key={index}><CardItem film={film} genres={genres}/></div>);
      return (
        <>
          <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
            {items}
          </SimpleGrid>
          <div className={classes.pagLine}><Pagination total={maxPage(datain.total_pages)} boundaries={3} value={activePage} color="violet" onChange={updataPage} mt="sm" /></div>
        </>
      );
  }
  return (
    <div>Нихуя нету, извините</div>
  )
}