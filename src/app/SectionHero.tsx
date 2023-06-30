import Button from '@/components/Button';

const SectionHero = () => {
  return (
    <section className="mx-auto w-full max-w-[600px] py-[100px] text-center">
      <p className="font-semibold tracking-[1.6px] text-green">
        CLIENT-DEVELOPMENT DRIVEN
      </p>
      <p className="mt-3 text-4xl font-bold leading-[54px]">
        We Design. We Develop. We Ship. In The Same Day.
      </p>
      <p className="mx-auto mt-6 max-w-[536px] leading-8 text-white/60">
        We are committed to not making clients wait. We will deliver the work as
        quickly as possible. Even on the same day. Even so, we do not reduce the
        quality of our work.
      </p>
      <div className="mt-10 flex justify-center gap-6">
        <Button size="large">Send Quote</Button>
        <Button size="large" variant="light" color="white">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default SectionHero;
