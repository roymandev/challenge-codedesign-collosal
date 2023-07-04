import Button from '@/components/Button';
import Link from 'next/link';

const SectionHero = () => {
  return (
    <section className="mx-auto w-full max-w-[600px] py-[100px] text-center">
      <p className="font-semibold tracking-[1.6px] text-green max-sm:text-sm">
        CLIENT-DEVELOPMENT DRIVEN
      </p>
      <p className="mt-3 text-2xl font-bold leading-9 sm:text-4xl sm:leading-[54px]">
        We Design. We Develop. We Ship. In The Same Day.
      </p>
      <p className="mx-auto mt-6 max-w-[536px] leading-8 text-white/60 max-sm:text-sm max-sm:leading-6">
        We are committed to not making clients wait. We will deliver the work as
        quickly as possible. Even on the same day. Even so, we do not reduce the
        quality of our work.
      </p>
      <div className="mt-10 flex justify-center gap-4 sm:gap-6">
        <Button asChild size="large" className="max-sm:flex-1 max-sm:px-0">
          <Link href="/send-quote">Send Quote</Link>
        </Button>
        <Button
          size="large"
          variant="light"
          color="white"
          className="max-sm:flex-1 max-sm:px-0"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default SectionHero;
