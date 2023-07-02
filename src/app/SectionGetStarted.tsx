import PricingCard, { PricingCardProps } from '@/components/PricingCard';

const SERVICES: PricingCardProps[] = [
  {
    title: 'UI Design',
    pricing: '1200$',
    benefits: [
      '10 design pages',
      'Well-documented',
      '4 revisions',
      '$100/additional page',
    ],
    href: '#',
  },
  {
    title: 'Development',
    pricing: '5000$',
    benefits: [
      'Web & Mobile',
      'Well-documented',
      '8 revisions',
      '$1000/additional feature',
    ],
    href: '#',
  },
  {
    title: 'Maintenance',
    pricing: '3000$',
    benefits: [
      'Daily backup',
      '3 hourse of maintenance',
      'Including fixing',
      '$50/additional hour',
    ],
    href: '#',
  },
];

const COLORS = ['bg-[#3F2379]', 'bg-[#233679]', 'bg-[#792366]'];

const SectionGetStarted = () => {
  return (
    <section className="rounded-[30px] bg-highlight px-4 py-10 text-center sm:mx-16 sm:pb-36 sm:pt-24">
      <h2 className="font-semibold tracking-[1.6px] text-green max-sm:text-sm">
        GET STARTED
      </h2>

      <span className="mx-auto mt-1 block max-w-[507px] text-xl font-bold leading-8 text-white sm:text-3xl sm:leading-[48px]">
        What do you need? Choose a service that can help you
      </span>

      <div className="mt-16 flex flex-wrap justify-center gap-5">
        {SERVICES.map((service, index) => (
          <PricingCard
            key={service.title}
            {...service}
            className={COLORS[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionGetStarted;
