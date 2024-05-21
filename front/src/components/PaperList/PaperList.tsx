import { Text, Paper } from '@mantine/core';
import React from 'react';
import classes from './PaperList.module.css';
import { CardItem } from '../CardItem/CardItem';

export function PaperList({feature}) {
  return (
    <div>
      <Paper className={classes.paper}>
        <CardItem/>
        <Text className={classes.text}>{feature.title}</Text>
        <Text className={classes.text}>{feature.description}</Text>
      </Paper>
    </div>
  );
}