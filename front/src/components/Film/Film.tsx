import React, { useEffect, useState } from 'react';
import classes from './Film.module.css';
import { AspectRatio, Card, Group, Image, Loader } from '@mantine/core'
import { getDataById } from '../../modules/getDataById.tsx';
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'
import empty from '../../img/empty.png';
import { getGenresMovie } from '../../modules/getGenresMovie.tsx';


export function Film() {


  const params = ((new URL(document.location)).searchParams).get("id")

  const [genres, setGenres] = useState([])
  const [data, setData] = useState(false)

  useEffect(()=> {
    getGenresMovie(setGenres)
    getStartData()
  },[])

  const getStartData = async () => {
    const res = await getDataById(params)
    setData(res)
    console.log(res)
  }

  const genreList = () => {
    const result = []
    for(let i of data.genres.map(item => item.id)){
      result.push(genres.find(item => item.id === i).name)
    }
    return result.join(', ')
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

  const durationFormat = (mins) =>  {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'h ' + minutes + 'm';
  }

  const timeFormatEN = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const item = data.release_date.split('-')
    const time = new Date(item[0], item[1], item[2]).toLocaleString("en-US", options)
    return time
  }

  const findOfTrailer = () => {

    const key = data.videos.results.find(item => item.name === 'Official Trailer' || 'Main Trailer')
    console.log(key)

    if(!key){
      return 'MDnVk5jIJr0'
    }
    return key.key 
    
  }

  const listProdComp = () => {
    const ar: any = []
    for(let i of data.production_companies){
      ar.push(
        <div className={classes.prodlist} key={data.production_companies.indexOf(i)}>
          <Image
            h='auto'
            w={'1.5vmax'}
            src={`https://image.tmdb.org/t/p/w500${i.logo_path}`}
          />
          &nbsp;
          &nbsp;
          {i.name}
        </div>
      )
    }
    return ar
  }
  

  if(data){

    return(
      <div className={classes.main}>
        <div className={classes.toptext}>Movie <div className={classes.slash}>&nbsp;/&nbsp;</div> {data['original_title']}</div>
        <Card withBorder p={0} className={classes.card}>
          <Group wrap="nowrap" gap={0}>
            <Image
              className={classes.img}
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}` ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : empty}
            />
            <div className={classes.boxitem}>
              <div className={classes.title}>{data.original_title} <Image className={classes.icon} src={darkStarPic}/></div>
              <div className={classes.year}>{data.release_date.split('-')[0]}</div>
              <div className={classes.rate}>
                <Image className={classes.icon} src={starPic}/>
                &nbsp;
                <div className={classes.genrelist}>{data.vote_average.toFixed(1)}</div>
                &nbsp;
                <div className={classes.year}>({cutNumber(Number(String(data.popularity).split('.')[0] + String(data.popularity).split('.')[1]))})</div>
              </div>
              <div className={classes.genre}>
                <table border={0} cellPadding={0} cellSpacing={0}>
                <thead>
                  <tr>
                    <td className={classes.table}>
                      <div className={classes.year}>Duration</div>
                    </td>
                    <td>
                      <div className={classes.genrelist}>{durationFormat(data.runtime)}</div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={classes.year}>Premiere</div>
                    </td>
                    <td>
                      <div className={classes.genrelist}>{timeFormatEN()}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={classes.year}>Budget</div>
                    </td>
                    <td>
                    <div className={classes.genrelist}>${new Intl.NumberFormat('en-EN').format(data.budget)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={classes.year}>Cross worldwide</div>
                    </td>
                    <td>
                      <div className={classes.genrelist}>${new Intl.NumberFormat('en-EN').format(data.revenue)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <div className={classes.year}>Genres</div>
                    </td>
                    <td>
                    <div className={classes.genrelist}>{genreList()}</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Group>
        </Card>
        <Card withBorder p={0} className={classes.cardinfo}>
          <div className={classes.main1}>
            <div className={classes.titletrailer}>Trailer</div>
            <div className={classes.video}>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`https://www.youtube.com/embed/` + findOfTrailer()}
                  title="YouTube video player"
                  style={{ border: 0 , borderRadius: '0.5625vmax'}}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <hr className={classes.line}></hr>
            <div className={classes.titletrailer}>Description</div>
            <div className={classes.desc}>{data.overview}</div>
            <hr className={classes.line}></hr>
            <div className={classes.prodtitle}>Prodaction</div>
            <div>{listProdComp()}</div>

          </div>
        </Card>

      </div>
    )

  }
  return <Loader size={30} />
  
}