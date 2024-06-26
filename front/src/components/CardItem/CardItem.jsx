import { Card, Image, Group } from '@mantine/core';
import classes from './CardItem.module.css';
import empty from '../../img/empty.png';
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'
import { fix } from '../../fix';
import { useState } from 'react';

export function CardItem({setModalFilmId, openModal, film, genres}) {

  const [star, setStar] = useState('')

  
  const genreList = () => {

    if(typeof film['genre_ids'] !== 'undefined'){
      const result = []
      for(let i of film.genre_ids){
        result.push(genres.find(item => item.id === i).name)
      }
      return result.join(', ')
    }
    
    return film.genres.map(item => item.name).join(', ')
    
  }

  const cutNumber = (n) => {
    const format = (toCut, letter) => String(n).slice(0, -toCut) + letter;
  
    if (n > 999999) {
      return format(6, "M");
    }
  
    if (n > 999) {
      return format(3, "K");
    }
  
    return n;
  }

  const likeItem = () => {
    if(sessionStorage.getItem('likes')){
      const likesString = sessionStorage.getItem('likes').split(',')
      const index = likesString.findIndex(item => item === String(film.id))
      if(index === -1){
        likesString.push(String(film.id))
        sessionStorage.setItem('likes', likesString.join())
      }
      else{
        likesString.splice(index, 1)
        sessionStorage.setItem('likes', likesString.join())
      }
    }
    else{
      sessionStorage.setItem('likes', [{id: String(film.id), rat: 5}])
    }
    console.log(sessionStorage.getItem('likes'))
    setStar(String(film.id))
  }

  const starState = () => {
    if(sessionStorage.getItem('likes')){
      const likesString = sessionStorage.getItem('likes').split(',')
      const index = likesString.findIndex(item => item.slice(0, -1) === String(film.id))
      if(index === -1){
        return darkStarPic
      }
      return starPic// + likesString[index][likesString[index].length - 1]
    }
    return darkStarPic
  }

  return (
    <Card withBorder p={0} className={classes.card} component="a" href={`${fix.link}/movie?id=${film.id}`}>
      <Group wrap="nowrap" gap={0}>
        <Image
          className={classes.img}
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}` ? `https://image.tmdb.org/t/p/w500/${film.poster_path}` : empty}
        />
        <div className={classes.boxitem}>
          <div className={classes.title}>{film.title} <Image className={classes.icon} src={starState()} 
          onClick={(e) => {
            e.preventDefault()
            setModalFilmId({id: film.id, title: film.title})
            openModal()
          }}
            /></div>
          <div className={classes.year}>{film.release_date.split('-')[0]}</div>
          <div className={classes.rate}>
            <Image className={classes.icon} src={starPic}/>
            &nbsp;
            <div className={classes.genrelist}>{film.vote_average.toFixed(1)}</div>
            &nbsp;
            <div className={classes.year}>({cutNumber(Number(String(film.popularity).split('.')[0] + String(film.popularity).split('.')[1]))})</div>
          </div>
          <div className={classes.genre}>
            <div className={classes.year}>Genres</div>
            &nbsp;
            <div className={classes.genrelist}>{genreList()}</div>
          </div>
        </div>
      </Group>
    </Card>
  );
}
