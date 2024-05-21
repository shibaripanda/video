import React from 'react';
import classes from './MoviesScreen.module.css';
import {
  // useMantineTheme,
} from '@mantine/core';
import { PaperList } from '../PaperList/PaperList.tsx';


const mockdata = [
  {
    title: '1',
    description: 'Text1'
  },
  {
    title: '2',
    description: 'Text2'
  },
  {
    title: '3',
    description: 'Text4'
  },
  {
    title: '4',
    description: 'Text5'
  },
  {
    title: '5',
    description: 'Text5'
  }
];

export function MoviesScreen() {
  
  const features = mockdata.map((feature, index) => (<div key={index}><PaperList feature={feature}/></div>));
  let key = 0

  const list = [
    <tr key={key}>
    <td>
        <b></b>
    </td>
    <td>
        <b></b>
    </td>
    </tr>
  ]

  for(let i of features){
    key++
    list.push(
            <tr key={key}>
                <td>
                    {i}
                </td>
                <td>
                    {i}
                </td>
            </tr>
    )
  }

  return(
    <div>
        <div key={324}>
            <table border={0} cellSpacing="0" cellPadding="0">
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    </div>
  )
}