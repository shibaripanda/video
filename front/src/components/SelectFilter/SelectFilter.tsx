import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import classes from './SelectFilter.module.css';

export function SelectFilter({label, data}) {
  console.log(data)
  return (
      <NativeSelect
        className={classes.selectbig}
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label={label}
        defaultValue={'dddddd'}
        data={data}
        mt="md"
      />
  );
}

