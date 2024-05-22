import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import classes from './SelectFilter2.module.css';

export function SelectFilter2({label, data}) {
  console.log(data)
  return (
      <NativeSelect
        className={classes.selectbig}
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        // label={label}
        label={<div className={classes.labelfont}>{label}</div>}
        defaultValue={'dddddd'}
        data={data}
        mt="md"
      />
  );
}

