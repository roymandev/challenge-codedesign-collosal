import SectionBadge from '@/components/SectionBadge';

const SectionTitle = () => {
  return (
    <section className="mx-auto w-full max-w-5xl border-b border-white/10 py-20 text-center">
      <SectionBadge>SERVICES</SectionBadge>
      <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
        We are here to help solve your company&apos;s problems
      </p>
    </section>
  );
};

export default SectionTitle;
