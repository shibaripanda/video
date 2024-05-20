import { Text, Paper } from '@mantine/core';
import React from 'react';
import classes from './PaperList.module.css';

export function PaperList() {
  return (
    <div>
      <Paper className={classes.paper}>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals 
          and other components that require background
          with shadow
        </Text>
      </Paper>
    </div>
  );
}