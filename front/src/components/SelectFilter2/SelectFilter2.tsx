import { Select } from '@mantine/core';
import React from 'react';
import classes from './SelectFilter2.module.css';

export function SelectFilter2({value, holder, label, data, updateFilter}) {
  return (
      <Select
        className={classes.selectbig}
        // rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        // label={label}
        label={<div className={classes.labelfont}>{label}</div>}
        placeholder={holder}
        onChange={value => updateFilter(value, label)}
        value={value}
        data={data}
        mt="md"
      />
  );
}

