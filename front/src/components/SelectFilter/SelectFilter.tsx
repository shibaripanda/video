import { Select, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import classes from './SelectFilter.module.css';

export function SelectFilter({value, label, holder, data, updateFilter}) {
  return (
      <Select
        className={classes.selectbig}
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label={label}
        value={value}
        onChange={value => updateFilter(value, label)}
        placeholder={holder}
        data={data}
        mt="md"
      />
  );
}

