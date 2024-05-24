import React, { useEffect, useState } from 'react';
import classes from './RaitedList.module.css';
import { getGenresMovie } from '../../modules/getGenresMovie.tsx';
import { Loader } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { ModalReiting } from '../ModalReiting/ModalReiting.tsx';
import { getDataById } from '../../modules/getDataById.tsx';
import { RaitedScreen } from '../RaitedScreen/RaitedScreen.tsx';


export function RaitedList() {

  const [data, setData] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)
  const [genres, setGenres] = useState([])
  const [activePage1, setPage1] = useState(sessionStorage.getItem('activePage1') ? sessionStorage.getItem('activePage1') : 1)
  const [modalFilmId, setModalFilmId] = useState('')

  useEffect(()=> {
    
    getGenreData()
    getStartData()
  },[])

  const getStartData = async () => {
    const listFilms = sessionStorage.getItem('likes')?.split(',').map(item => item.slice(0, -1))
    console.log(listFilms)
    const list = []
    console.log(listFilms.toString() !== [''].toString())
    if(listFilms?.length && listFilms.toString() !== [''].toString()){
      for(let i of listFilms){
        const res = await getDataById(i)
        list.push(res)
      }
      setData(list)
      console.log(list)
    }
    else{
      setData([])
    }
  }

  const getGenreData = async () => {
    const res = await getGenresMovie()
    setGenres(res.genres)
  }

  const updataPage = async (e: number) => {
    setData(false)
    setPage1(e)
    sessionStorage.setItem('activePage1', e)
    window.scrollTo(0, 0)
    // const res = await getFilterData(e, sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : '', yearFilter, sortFilter, fromFilter, toFilter)
    // setData(data)
    // setPage1(e)
    getStartData()
  }


  if(data && genres.length){
    
    return(

      <div>
        <>
          <Modal xOffset={'0vmax'} radius={'0.5vmax'} opened={opened} onClose={close} title="Your rating" centered>
            <ModalReiting modalFilmId={modalFilmId} onClose={close}/>
          </Modal>
        </>
        <div style={{fontSize: '2vmax'}}>Raited movies</div>

        <div><RaitedScreen setModalFilmId={setModalFilmId} openModal={open} datain={data} genres={genres} updataPage={updataPage} activePage={activePage1}/></div>
      </div>
    )

  }
  return <Loader size={30} />

}