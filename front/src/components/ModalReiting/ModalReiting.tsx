import React, { useState } from "react"
import classes from './ModalReiting.module.css';
import { Button, Image } from "@mantine/core";
import starPic from '../../img/star.png';
import darkStarPic from '../../img/darkstar.png'

export const ModalReiting = ({modalFilmId, onClose}) => {
    const [star, setStar] = useState('10')

    const likeItem = (ret) => {
        if(sessionStorage.getItem('likes')){
          const likesString = sessionStorage.getItem('likes').split(',')
          const index = likesString.findIndex(item => item.slice(0, -1) === String(modalFilmId.id))
          if(index === -1){
            likesString.push(String(modalFilmId.id) + ret)
            sessionStorage.setItem('likes', likesString.join())
          }
          else{
            likesString.splice(index, 1)
            likesString.push(String(modalFilmId.id) + ret)
            sessionStorage.setItem('likes', likesString.join())
          }
        }
        else{
          sessionStorage.setItem('likes', String(modalFilmId.id) + ret)
        }
        console.log(sessionStorage.getItem('likes'))
        setStar(ret)
    }
    const starColor = () => {
    let res: any = false
    if(sessionStorage.getItem('likes')){
        const likesString = sessionStorage.getItem('likes').split(',')
        const index = likesString.findIndex(item => item.slice(0, -1) === String(modalFilmId.id))
        if(index === -1){
            // res = 10
        }
        else{
            res = likesString[index][likesString[index].length - 1]
        }
    }
    return res
    }
    const lineStar = () => {

        const currentStar = (i) => {
            if(!starColor()){
                return darkStarPic
            }
            else if(i > starColor()){
            return darkStarPic
            }
            else{
                return starPic
            }
        }
        
        console.log(starColor())
        const res = []
        for (let i = 0; i < 10 ; i++){
            res.push(
            <Image
                key={i}
                src={currentStar(i)}
                h={'1vmax'}
                w={'auto'}
                onClick={(e) => {
                    // e.preventDefault()
                    likeItem(i)
                  }}
            />
            )
        }
        return res
    }
    const removeReit = () => {
        if(sessionStorage.getItem('likes')){
            const likesString = sessionStorage.getItem('likes').split(',')
            const index = likesString.findIndex(item => item.slice(0, -1) === String(modalFilmId.id))
            if(index === -1){
            //   likesString.push(String(modalFilmId.id) + ret)
            //   sessionStorage.setItem('likes', likesString.join())
            }
            else{
              likesString.splice(index, 1)
            //   likesString.push(String(modalFilmId.id) + ret)
              sessionStorage.setItem('likes', likesString.join())
            }
          }
        console.log('sdsd')
        onClose()
    }

    return(
        <div className={classes.modal}>
            <hr className={classes.line}></hr>
            <div className={classes.title}>{modalFilmId.title}</div>
            <div className={classes.starline}>{lineStar()}</div>
            <div><Button className={classes.but1} variant="filled" onClick={onClose}>Save</Button> <Button className={classes.but2} variant="filled" onClick={removeReit}>Remove reiting</Button></div>
        </div>
    )
    
}