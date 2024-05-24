import React from "react"
import classes from './ModalReiting.module.css';
import { Image } from "@mantine/core";
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'

export const ModalReiting = ({modalFilmId}) => {


    
    return(
        <div className={classes.modal}>
            <hr className={classes.line}></hr>
            <div>{modalFilmId.title}</div>
            <div className={classes.starline}>
                <Image
                    src={darkStarPic}
                    h={'1.75vmax'}
                    w={'1.75vmax'}
                />
                <Image
                    src={darkStarPic}
                    h={'1.75vmax'}
                    w={'1.75vmax'}
                />
            </div>
            dfdfdfdfdfdf
        </div>
    )
    
}