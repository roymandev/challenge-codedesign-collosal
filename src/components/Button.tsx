import twclsx from '@/lib/twclsx';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef } from 'react';

type Props = {
  asChild?: boolean;
  color?: 'primary' | 'white';
  variant?: 'filled' | 'light' | 'outline';
  size?: 'large' | 'medium';
} & ComponentPropsWithoutRef<'button'>;

const Button = ({
  asChild,
  color = 'primary',
  variant = 'filled',
  size = 'medium',
  className,
  ...rest
}: Props) => {
  const Component = asChild ? Slot : 'button';

  const variantId: `${typeof color}-${typeof variant}` = `${color}-${variant}`;

  return (
    <Component
      className={twclsx(
        'flex justify-center items-center rounded-[3px]',
        variantId === 'primary-filled' && 'bg-primary text-white',
        variantId === 'primary-light' && 'bg-primary/10 text-white',
        variantId === 'primary-outline' && 'border border-primary text-primary',
        variantId === 'white-filled' && 'bg-white text-dark',
        variantId === 'white-light' && 'bg-white/10 text-white',
        variantId === 'white-outline' && 'border border-white text-white',
        size === 'large' && 'h-[52px] px-[55px] font-semibold',
        size === 'medium' && 'h-[39px] px-[30px] text-sm font-medium',
        className,
      )}
      {...rest}
    />
  );
};

export default Button;
