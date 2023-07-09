import FeatureCard, { FeatureCardProps } from '@/components/FeatureCard';
import SectionBadge from '@/components/SectionBadge';
import Background from '~/background-features.svg';
import Image from 'next/image';

const SectionFeatures = () => {
  const features: Omit<FeatureCardProps, 'iconStyle'>[] = [
    {
      icon: '/icon-figma-thin.svg',
      title: 'Design Files',
      desc: 'Projects are well designed using Figma. You will get the design file.',
    },
    {
      icon: '/icon-clock.svg',
      title: 'Same Day',
      desc: "We don't want you to wait long. Everything will be finished on the same day.",
    },
    {
      icon: '/icon-code-thin.svg',
      title: 'Quality Code',
      desc: 'Code written according to good practice is highly maintainable.',
    },
    {
      icon: '/icon-trending-up.svg',
      title: 'SEO',
      desc: 'The website will appear on the first page of the search engine.',
    },
    {
      icon: '/icon-layout-thin.svg',
      title: 'Responsive Design',
      desc: "Access the website on any device, don't limit your visitors.",
    },
    {
      icon: '/icon-zap.svg',
      title: 'Blazing Fast',
      desc: 'A high speed website will not disappoint prospective customers.',
    },
  ];

  return (
    <section>
      <header className="py-20 text-center">
        <SectionBadge>Features</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-3xl sm:leading-[54px]">
          Here&apos;s what you will get when purchasing this service
        </p>
      </header>
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Image
          alt=""
          src={Background}
          className="absolute opacity-[.12] blur-[175px]"
        />
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default SectionFeatures;
