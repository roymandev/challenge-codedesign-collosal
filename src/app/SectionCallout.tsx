import Button from '@/components/Button';
import Link from 'next/link';

const SectionCallout = () => {
  return (
    <section className="mx-auto my-28 flex w-full max-w-5xl justify-between gap-8 border-y border-white/10 px-4 py-12 max-lg:flex-col lg:items-center lg:gap-14">
      <p className="mx-auto text-xl font-bold leading-8 text-white sm:text-3xl sm:leading-[48px]">
        We&apos;ve prepared everything, it&apos;s time for you to tell the
        problem
      </p>
      <div className="flex shrink-0 gap-[10px]">
        <Button
          asChild
          size="large"
          className="max-sm:h-[46px] max-sm:flex-1 max-sm:px-0 max-sm:text-sm"
        >
          <Link href="/send-quote">Send Quote</Link>
        </Button>
        <Button
          size="large"
          variant="light"
          className="max-sm:h-[46px] max-sm:flex-1 max-sm:px-0 max-sm:text-sm"
        >
          Ask Us
        </Button>
      </div>
    </section>
  );
};

export default SectionCallout;
