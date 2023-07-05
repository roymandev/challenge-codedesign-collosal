import twclsx from '@/lib/twclsx';
import PlaceholderMobile from '~/placeholder-mobile.svg';
import PlaceholderDesktop from '~/placeholder-desktop.svg';
import Image from 'next/image';
import Button from './Button';

export type ProjectCardProps = {
  type: 'mobile' | 'desktop';
  title: string;
  image?: string;
  desc: string;
  href: string;
  className?: string;
};

const ProjectCard = ({
  image,
  title,
  desc,
  type,
  className,
}: ProjectCardProps) => {
  return (
    <article className={twclsx('text-center', className)}>
      <div className="relative aspect-square overflow-hidden rounded-[3px] border border-white/10">
        <Image
          alt={image ? `Thumbnail ${title}` : 'Placeholder image'}
          src={
            image
              ? image
              : type === 'desktop'
              ? PlaceholderDesktop
              : PlaceholderMobile
          }
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-10 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-white/60">{desc}</p>

      <Button
        className="mx-auto mt-10 rounded-full"
        variant="outline"
        color="white"
      >
        Detail
      </Button>
    </article>
  );
};

export default ProjectCard;
