import React, { useEffect, useState } from 'react';
import classes from './MoviesScreen.module.css';
import { SelectFilter } from '../SelectFilter/SelectFilter.tsx';
import { SelectFilter2 } from '../SelectFilter2/SelectFilter2.tsx';
import { PaginationLine } from '../PaginationLine/PaginationLine.tsx';
import { getGenresMovie } from '../../modules/getGenresMovie.tsx';
import { Loader } from '@mantine/core'
import { getData } from '../../modules/getData.tsx';
import { getFilterData } from '../../modules/getFilterData.tsx';
import { getNumberArString } from '../../modules/getNumberArString.tsx';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { ModalReiting } from '../ModalReiting/ModalReiting.tsx';


export function MoviesScreen() {

  const [genres, setGenres] = useState([])
  const [data, setData] = useState(false)
  const [activePage, setPage] = useState(sessionStorage.getItem('activePage') ? sessionStorage.getItem('activePage') : 1)
  const [genreFilter, setGenreFilter] = useState(sessionStorage.getItem('genreString') ? sessionStorage.getItem('genreString') : '')
  const [yearFilter, setYearFilter] = useState(sessionStorage.getItem('yearFilter') ? sessionStorage.getItem('yearFilter') : '')
  const [sortFilter, setSortFilter] = useState(sessionStorage.getItem('sortFilter') ? sessionStorage.getItem('sortFilter') : '')
  const [fromFilter, setFromFilter] = useState(sessionStorage.getItem('fromFilter') ? sessionStorage.getItem('sortFilter') : '')
  const [toFilter, setToFilter] = useState(sessionStorage.getItem('toFilter') ? sessionStorage.getItem('toFilter') : '')
  const [opened, { open, close }] = useDisclosure(false)
  const [modalFilmId, setModalFilmId] = useState('')

  useEffect(()=> {
    getGenreData()
    getStartData()
  },[])

  const getStartData = async () => {
    const res = await getData()
    setData(res)
  }

  const getGenreData = async () => {
    const res = await getGenresMovie()
    setGenres(res.genres)
  }
  
  const genreToId = async (genreFilter, genres) => {
    if(genreFilter === '') return ''
    else if(genres.length){
      const id = await genres.find(item => item.name === genreFilter)
      console.log(id)
      console.log(id.id)
      return id.id
    }
    return ''
  }

  const updataPage = async (e: number) => {
    setData(false)
    setPage(e)
    sessionStorage.setItem('activePage', e)
    window.scrollTo(0, 0)
    const res = await getFilterData(e, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, sortFilter, fromFilter, toFilter)
    setData(res)
  }
  const updateFilter = async (value, label) => {
    setData(false)
    let res 
    if(label === 'Genres') {
      sessionStorage.setItem('genreString', value)
      sessionStorage.setItem('genreFilter', await genreToId(value, genres))
      setGenreFilter(value)
      res = await getFilterData(1, sessionStorage.getItem('genreFilter'), yearFilter, sortFilter, fromFilter, toFilter)
    }
    else if (label === 'Release year') {
      sessionStorage.setItem('yearFilter', value)
      setYearFilter(value)
      res = await getFilterData(1, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', value, sortFilter, fromFilter, toFilter)
    }
    else if (label === 'Sort by') {
      // sessionStorage.setItem('yearFilter', value)
      setSortFilter(value)
      res = await getFilterData(1, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, value, fromFilter, toFilter)
    }
    else if (label === 'Rating') {
      if(value > Number(toFilter) || toFilter !== ''){
        sessionStorage.setItem('toFilter', value)
        sessionStorage.setItem('fromFilter', value)
        setToFilter(value)
        setFromFilter(value)
        res = await getFilterData(1, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, sortFilter, value, value)
      }
      else{
        sessionStorage.setItem('fromFilter', value)
        setFromFilter(value)
        res = await getFilterData(1, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, sortFilter, value, toFilter)
      }
    }
    else {
      sessionStorage.setItem('toFilter', value)
      setToFilter(value)
      res = await getFilterData(1, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, sortFilter, fromFilter, value)
    }
    setData(res)
  }

  const clearFilter = () => {
    sessionStorage.removeItem('activePage')
    sessionStorage.removeItem('genreString')
    sessionStorage.removeItem('yearFilter')
    sessionStorage.removeItem('sortFilter')
    sessionStorage.removeItem('sortFilter')
    sessionStorage.removeItem('toFilter')
    sessionStorage.removeItem('genreFilter')
  }



  if(data && genres.length){
    console.log('filters:', genreFilter, yearFilter, sortFilter)

    return(
      <div>
        <>
          <Modal xOffset={'0vmax'} radius={'0.5vmax'} opened={opened} onClose={close} title="Your rating" centered>
            <ModalReiting modalFilmId={modalFilmId} onClose={close}/>
          </Modal>
        </>
        <div style={{fontSize: '2vmax'}}>Movies</div>

        <div className={classes.filter}>
          <div><SelectFilter  updateFilter={updateFilter} value={genreFilter} label={'Genres'}       holder={'Select genre'}        data={genres.map(item => item['name'])}/></div>
          <div><SelectFilter  updateFilter={updateFilter} value={yearFilter}  label={'Release year'} holder={'Select release year'} data={getNumberArString(new Date(Date.now()).getFullYear(), i => i + 1, 130)}/></div>
          <div><SelectFilter2 updateFilter={updateFilter} value={fromFilter}  label={'Rating'}       holder={'From'}                data={getNumberArString(10, i => i + 1, 10)}/></div>
          <div><SelectFilter2 updateFilter={updateFilter} value={toFilter}    label={''}             holder={'To'}                  data={getNumberArString(Number(fromFilter) + (10 - Number(fromFilter)), i => i + 1, 11 - Number(fromFilter))}/></div>
          <div style={{fontSize: '0.875vmax', font: 'Inter400', color: '#7B7C88'}} onClick={clearFilter}><a href='/'>Reset filter</a></div>
        </div>
        <div className={classes.sort}>
          <div><SelectFilter value={sortFilter}  label={'Sort by'} holder={'Most popular'} data={['Most popular', 'Release year']} updateFilter={updateFilter}/></div>
        </div>
        <div><PaginationLine setModalFilmId={setModalFilmId} openModal={open} datain={data} genres={genres} updataPage={updataPage} activePage={activePage}/></div>
      </div>
    )

  }
  return <Loader size={30} />

}