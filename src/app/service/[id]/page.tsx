import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';

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

      <section className="grid items-center gap-10 px-2 py-16 sm:grid-cols-2">
        <div className="relative aspect-square h-min w-full max-w-sm shrink-0 lg:max-w-[462px]">
          <Image
            alt={data.title}
            src={data.image}
            fill
            className="object-contain"
          />
        </div>
        <div className="py-3">
          <div className="whitespace-pre-line leading-8 text-white/60 prose-p:mb-10">
            {data.desc}
          </div>
          <ol className="mt-10 list-[square] space-y-[10px] pl-4 font-medium leading-8">
            {data.summaries.map((summary) => (
              <li key={summary}>
                <span className="ml-2">{summary}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
