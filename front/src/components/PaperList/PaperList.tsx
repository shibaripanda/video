import { Text, Paper } from '@mantine/core';
import React from 'react';
import classes from './PaperList.module.css';

export function PaperList({feature}) {
  return (
    <div>
      <Paper className={classes.paper}>
        <Text className={classes.text}>{feature.title}</Text>
        <Text className={classes.text}>{feature.description}</Text>
      </Paper>
    </div>
  );
}