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
  <article className="flex flex-1 items-start gap-4 rounded-[5px] bg-white/5 p-4 sm:flex-col sm:gap-7 sm:p-6 lg:px-10 lg:py-8">
    <span className="shrink-0 rounded-[3px] bg-white/[.03] p-[13px]">
      <Image alt={`Icon ${title}`} src={icon} />
    </span>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-8 text-white/60 max-sm:text-sm max-sm:leading-6">
        {desc}
      </p>
    </div>
  </article>
);

const SectionFeatures = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl gap-5 max-sm:flex-col">
      {FEATURES.map((feature) => (
        <Card key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default SectionFeatures;
