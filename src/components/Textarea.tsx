import twclsx from '@/lib/twclsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'textarea'>;

const Textarea = ({ className, ...rest }: Props) => {
  return (
    <textarea
      className={twclsx(
        'bg-transparent h-10 min-w-0 w-full rounded-[3px] border-white/10 border outline-none focus:border-white py-1 px-2',
        className,
      )}
      {...rest}
    />
  );
};

export default Textarea;
