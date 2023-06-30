import IconFigma from '~/icon-figma.svg';
import IconCode from '~/icon-code.svg';
import IconBox from '~/icon-box.svg';
import Image, { ImageProps } from 'next/image';

const FEATURES: CardProps[] = [
  {
    icon: IconFigma,
    title: 'Design',
    desc: 'The project interface will be designed first, our favorite tool is Figma.',
  },
  {
    icon: IconCode,
    title: 'Develop',
    desc: 'Transform design and write business logic here. Choose the technology you want.',
  },
  {
    icon: IconBox,
    title: 'Ship',
    desc: 'After the work is complete, we will send the project and all its assets to you.',
  },
];

type CardProps = {
  icon: ImageProps['src'];
  title: string;
  desc: string;
};

const Card = ({ icon, title, desc }: (typeof FEATURES)[number]) => (
  <article className="flex flex-1 flex-col items-start rounded-[5px] bg-white/5 px-10 py-8">
    <span className="rounded-[3px] bg-white/[.03] p-[13px]">
      <Image alt={`Icon ${title}`} src={icon} />
    </span>
    <h3 className="mt-7 text-lg font-bold">{title}</h3>
    <p className="mt-2 leading-8 text-white/60">{desc}</p>
  </article>
);

const SectionFeatures = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl gap-5">
      {FEATURES.map((feature) => (
        <Card key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default SectionFeatures;
