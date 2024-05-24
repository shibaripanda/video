import { Button, Image, Pagination, SimpleGrid } from '@mantine/core';
import React from 'react';
import { CardItem } from '../CardItem/CardItem';
import classes from './RaitedScreen.module.css';
import nofilm from '../../img/nofilm.png';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export function RaitedScreen({setModalFilmId, openModal, datain, genres, updataPage, activePage}) {

  console.log(activePage)

  const maxPage = (countPages: number) => {
    if(countPages > 500) return 500
    return countPages
  }
  if(datain.length){
      const data = chunk(datain, 4)
      console.log(data)
      const items = data[activePage - 1].map((film, index) => <div key={index}><CardItem setModalFilmId={setModalFilmId} openModal={openModal} film={film} genres={genres}/></div>);
      return (
        <>
          <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
            {items}
          </SimpleGrid>
          <div className={classes.pagLine}><Pagination total={maxPage(data.length)} boundaries={2} value={activePage} color="violet" onChange={updataPage} mt="sm" /></div>
        </>
      );
  }
  return (
    <div className={classes.nofilm}>
      <div><Image src={nofilm} h={'13.650625vmax'} /></div>
      <div>You haven`t rated any films yet</div>
      <div><Button>Find movies</Button></div>
    </div>
  )
}