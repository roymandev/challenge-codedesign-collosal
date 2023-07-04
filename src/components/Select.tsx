'use client';

import twclsx from '@/lib/twclsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'select'>;

const Select = ({ className, ...rest }: Props) => {
  return (
    <select
      className={twclsx(
        'h-10 w-full min-w-0 rounded-[3px] border border-white/10 bg-transparent px-2 outline-none focus:border-white',
        className,
      )}
      {...rest}
    />
  );
};

export default Select;
