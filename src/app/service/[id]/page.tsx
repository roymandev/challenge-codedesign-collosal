import SectionBadge from '@/components/SectionBadge';
import SectionFeatures from './SectionFeatures';
import SectionFAQ from './SectionFAQ';

const ServiceDetailPage = () => {
  const data = {
    name: 'Development',
    title: "Solve your company's repetitive problems by designing apps",
    image: '/illustration-development.svg',
    desc: 'Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.\n\nWe can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed.',
    summaries: [
      'Avoid potential bugs with unit testing',
      'Removing unused code will speed up the application',
      'The modern design pleases the users',
      'A good UX will not disappoint users',
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="border-b border-white/10 py-20 text-center">
        <SectionBadge>{data.name}</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          {data.title}
        </p>
      </section>

      <SectionFeatures />
      <SectionFAQ />
    </main>
  );
};

export default ServiceDetailPage;
