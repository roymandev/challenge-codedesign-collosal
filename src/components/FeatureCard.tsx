import twclsx from '@/lib/twclsx';
import Image, { ImageProps } from 'next/image';

export type FeatureCardProps = {
  icon: ImageProps['src'];
  title: string;
  desc: string;
  iconStyle?: 'default' | 'squared';
};

const FeatureCard = ({
  icon,
  title,
  desc,
  iconStyle = 'default',
}: FeatureCardProps) => (
  <article className="flex flex-1 items-start gap-4 rounded-[5px] bg-white/5 p-4 sm:flex-col sm:gap-7 sm:p-6 lg:px-10 lg:py-8">
    <span
      className={twclsx(
        'shrink-0',
        iconStyle === 'default' && 'max-sm:w-9',
        iconStyle === 'squared' && 'rounded-[3px] bg-white/[.03] p-[13px]',
      )}
    >
      <Image
        alt={`Icon ${title}`}
        src={icon}
        width={iconStyle === 'squared' ? 24 : 50}
        height={iconStyle === 'squared' ? 24 : 50}
      />
    </span>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-8 text-white/60 max-sm:text-sm max-sm:leading-6">
        {desc}
      </p>
    </div>
  </article>
);

export default FeatureCard;
