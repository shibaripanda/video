import React, { useEffect, useState } from 'react';
import classes from './MoviesScreen.module.css';
import { SelectFilter } from '../SelectFilter/SelectFilter.tsx';
import { SelectFilter2 } from '../SelectFilter2/SelectFilter2.tsx';
import { PaginationLine } from '../PaginationLine/PaginationLine.tsx';
import { getGenresMovie } from '../../modules/getGenresMovie.tsx';
import { Loader } from '@mantine/core'
import { getData } from '../../modules/getData.tsx';
import { getFilterData } from '../../modules/getFilterData.tsx';


export function MoviesScreen() {

  const [genres, setGenres] = useState([])
  const [data, setData] = useState(false)
  const [activePage, setPage] = useState(1)
  const [genreFilter, setGenreFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')
  const [sortFilter, setSortFilter] = useState('')

  useEffect(()=> {
    getGenresMovie(setGenres)
    getFilterData(setData, 1 , '', '', '')
  },[])

  const genreToId = async (name, gen) => {
    console.log(name)
    console.log(gen)
    if(gen){
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
    await getFilterData(setData, e, genreToId(genreFilter, genres), yearFilter, sortFilter)
  }
  const updateFilter = async (value, label) => {
    // console.log(value)
    setData(false)
    // setPage(1)
    // window.scrollTo(0, 0)
    // console.log(label)
    // console.log()
    // console.log(label === 'Genres')
    // console.log(value)
    if(label === 'Genres') setGenreFilter(value)
    else if (label === 'Release year') setYearFilter(value)
    else if (label === 'Sort by') setSortFilter(value)
    await getFilterData(setData, 1, genreToId(genreFilter, genres), yearFilter, sortFilter)
  }
  
  
  if(genres.length && data){
    console.log(data)

    return(
      <div>
        <div style={{fontSize: '2vmax'}}>Movies</div>

        <div className={classes.filter}>
          <div><SelectFilter value={genreFilter} label={'Genres'} holder={'Select genre'} data={genres.map(item => item['name'])} updateFilter={updateFilter}/></div>
          <div><SelectFilter value={yearFilter}  label={'Release year'} holder={'Select release year'} data={[...new Set(data['results'].map(item => String(item['release_date'].split('-')[0])))].sort((a, b) => Number(b) - Number(a))} updateFilter={updateFilter}/></div>
          <div><SelectFilter2 label={'Rating'} data={['1', '2']}/></div>
          <div><SelectFilter2 label={''} data={['1', '2']}/></div>
          <div style={{fontSize: '0.875vmax', font: 'Inter400', color: '#7B7C88'}}>Reset filter</div>
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