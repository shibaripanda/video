import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './CardItem.module.css';
import pic from '../../img/poster.jpg';
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'

export function CardItem({film}) {
  console.log(film)
  return (
    <Card withBorder p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          className={classes.img}
          src={pic}
        />
        <div className={classes.boxitem}>
          <div className={classes.title}>{film.title} <Image className={classes.icon} src={darkStarPic}/></div>
          <div className={classes.year}>{film.year}</div>
          <div className={classes.rate}>
            <Image className={classes.icon} src={starPic}/>
            &nbsp;
            <div className={classes.genrelist}>{film.rate}</div>
            &nbsp;
            <div className={classes.year}>({film.view})</div>
          </div>
          <div className={classes.genre}>
            <div className={classes.year}>Genres</div>
            &nbsp;
            <div className={classes.genrelist}>{film.genre.join(', ')}</div>
          </div>
        </div>
      </Group>
    </Card>
  );
}

{/* <Avatar size={20}src={pic1}/> */}