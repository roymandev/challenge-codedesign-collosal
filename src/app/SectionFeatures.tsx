import IconFigma from '~/icon-figma.svg';
import IconCode from '~/icon-code.svg';
import IconBox from '~/icon-box.svg';
import FeatureCard, { FeatureCardProps } from '@/components/FeatureCard';

const FEATURES: FeatureCardProps[] = [
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

const SectionFeatures = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl gap-5 max-sm:flex-col">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} {...feature} iconStyle="squared" />
      ))}
    </div>
  );
};

export default SectionFeatures;
