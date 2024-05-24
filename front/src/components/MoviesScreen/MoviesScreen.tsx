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


export function MoviesScreen() {

  const [genres, setGenres] = useState([])
  const [data, setData] = useState(false)
  const [activePage, setPage] = useState(1)
  const [genreFilter, setGenreFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')
  const [sortFilter, setSortFilter] = useState('')
  const [fromFilter, setFromFilter] = useState('')
  const [toFilter, setToFilter] = useState('')

  useEffect(()=> {
    getGenresMovie(setGenres)
    getStartData()
  },[])

  const getStartData = async () => {
    const res = await getData()
    setData(res)
  }
  const genreToId = async (name, gen) => {
    if(name === '') return ''
    else if(gen){
      const id = await gen.find(item => item.name === name)
      console.log(id.id)
      return id.id
    }
    return ''
  }
  const updataPage = async (e: number) => {
    setData(false)
    setPage(e)
    window.scrollTo(0, 0)
    const res = await getFilterData(e, await genreToId(genreFilter, genres), yearFilter, sortFilter, fromFilter, toFilter)
    setData(res)
  }
  const updateFilter = async (value, label) => {
    console.log('setFilter')
    setData(false)
    let res 
    if(label === 'Genres') {
      setGenreFilter(value)
      res = await getFilterData(1, await genreToId(value, genres), yearFilter, sortFilter, fromFilter, toFilter)
    }
    else if (label === 'Release year') {
      setYearFilter(value)
      res = await getFilterData(1, await genreToId(genreFilter, genres), value, sortFilter, fromFilter, toFilter)
    }
    else if (label === 'Sort by') {
      setSortFilter(value)
      res = await getFilterData(1, await genreToId(genreFilter, genres), yearFilter, value, fromFilter, toFilter)
    }
    else if (label === 'Rating') {
      if(value > toFilter || toFilter !== ''){
        setToFilter(value)
        setFromFilter(value)
        res = await getFilterData(1, await genreToId(genreFilter, genres), yearFilter, sortFilter, value, value)
      }
      else{
        setFromFilter(value)
        res = await getFilterData(1, await genreToId(genreFilter, genres), yearFilter, sortFilter, value, toFilter)
      }
    }
    else {
      setToFilter(value)
      res = await getFilterData(1, await genreToId(genreFilter, genres), yearFilter, sortFilter, fromFilter, value)
    }
    setData(res)
  }

  if(genres.length && data){
    console.log('filters:', genreFilter, yearFilter, sortFilter)

    return(
      <div>
        <div style={{fontSize: '2vmax'}}>Movies</div>

        <div className={classes.filter}>
          <div><SelectFilter  updateFilter={updateFilter} value={genreFilter} label={'Genres'}       holder={'Select genre'}        data={genres.map(item => item['name'])}/></div>
          <div><SelectFilter  updateFilter={updateFilter} value={yearFilter}  label={'Release year'} holder={'Select release year'} data={getNumberArString(new Date(Date.now()).getFullYear(), i => i + 1, 130)}/></div>
          <div><SelectFilter2 updateFilter={updateFilter} value={fromFilter}  label={'Rating'}       holder={'From'}                data={getNumberArString(10, i => i + 1, 10)}/></div>
          <div><SelectFilter2 updateFilter={updateFilter} value={toFilter}    label={''}             holder={'To'}                  data={getNumberArString(Number(fromFilter) + (10 - Number(fromFilter)), i => i + 1, 11 - Number(fromFilter))}/></div>
          {/* <div style={{fontSize: '0.875vmax', font: 'Inter400', color: '#7B7C88'}}>Reset filter</div> */}
        </div>
        <div className={classes.sort}>
          <div><SelectFilter value={sortFilter}  label={'Sort by'} holder={'Most popular'} data={['Most popular', 'Release year']} updateFilter={updateFilter}/></div>
        </div>
        <div><PaginationLine datain={data} genres={genres} updataPage={updataPage} activePage={activePage}/></div>
      </div>
    )

  }
  return <Loader size={30} />
  
}