import twclsx from '@/lib/twclsx';
import Image from 'next/image';
import IconQuote from '~/icon-quote-badge.svg';

export type TestimonialCardProps = {
  image: string;
  name: string;
  company: string;
  comment: string;
  className?: string;
};

const TestimonialCard = ({
  image,
  name,
  company,
  comment,
  className,
}: TestimonialCardProps) => {
  return (
    <article
      className={twclsx(
        'flex flex-col items-center rounded-[3px] bg-white/5 px-12 py-16 text-center text-white/60',
        className,
      )}
    >
      <div className="relative h-[90px] w-[90px]">
        <Image
          alt={`${name} profile`}
          src={image}
          fill
          className="rounded-full object-cover"
        />
        <Image alt="" src={IconQuote} className="absolute bottom-0 right-0" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{name}</h3>
      <span className="mt-2 text-sm font-medium text-white/60">{company}</span>
      <p className="mt-8 font-medium leading-8">{comment}</p>
    </article>
  );
};

export default TestimonialCard;
