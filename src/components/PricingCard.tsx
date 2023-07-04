import twclsx from '@/lib/twclsx';
import Button from './Button';

export type PricingCardProps = {
  title: string;
  pricing: string;
  benefits: string[];
  href: string;
  className?: string;
};

const PricingCard = ({
  title,
  pricing,
  benefits,
  className,
}: PricingCardProps) => {
  return (
    <article
      className={twclsx(
        'w-full max-w-[328px] px-7 sm:px-12 py-7 rounded-[10px]',
        className,
      )}
    >
      <div className="mt-6 flex justify-between">
        <span className="font-bold">{title}</span>
        <div className="flex flex-col text-left">
          <span className="text-xs text-white/60">Starting from</span>
          <span className="text-4xl font-bold">{pricing}</span>
        </div>
      </div>
      <hr className="my-9 border-white/5" />
      <ul className="leading-9">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <Button color="white" size="large" className="mt-12 w-full">
        Detail
      </Button>
    </article>
  );
};

export default PricingCard;
