import twclsx from '@/lib/twclsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'>;

const Input = ({ className, ...rest }: Props) => {
  return (
    <input
      className={twclsx(
        'bg-transparent h-10 min-w-0 w-full rounded-[3px] border-white/10 border outline-none focus:border-white px-2',
        className,
      )}
      {...rest}
    />
  );
};

export default Input;
