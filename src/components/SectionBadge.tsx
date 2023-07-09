import twclsx from '@/lib/twclsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'span'>;

const SectionBadge = ({ className, ...rest }: Props) => {
  return (
    <span
      className={twclsx(
        'font-semibold uppercase tracking-[1.6px] text-green max-sm:text-sm',
        className,
      )}
      {...rest}
    />
  );
};

export default SectionBadge;
