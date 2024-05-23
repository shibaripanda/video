import { Card, Image, Group } from '@mantine/core';
import classes from './CardItem.module.css';
import pic from '../../img/poster.jpg';
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'

export function CardItem({film, genres}) {
  // console.log(film)
  const genreList = () => {
    const result = []
    for(let i of film.genre_ids){
      result.push(genres.find(item => item.id === i).name)
    }
    return result.join(', ')
  }
  return (
    <Card withBorder p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          className={classes.img}
          src={pic}
        />
        <div className={classes.boxitem}>
          <div className={classes.title}>{film.title} <Image className={classes.icon} src={darkStarPic}/></div>
          <div className={classes.year}>{film.release_date.split('-')[0]}</div>
          <div className={classes.rate}>
            <Image className={classes.icon} src={starPic}/>
            &nbsp;
            <div className={classes.genrelist}>{film.vote_average.toFixed(1)}</div>
            &nbsp;
            <div className={classes.year}>({film.popularity})</div>
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
