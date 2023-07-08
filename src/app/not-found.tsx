import Button from '@/components/Button';
import SectionBadge from '@/components/SectionBadge';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="mx-auto flex w-full max-w-lg flex-col items-center pt-24 text-center">
        <SectionBadge className="text-red">ERROR</SectionBadge>
        <p className="mt-3 text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          The page you are looking for is not on this website, please check
          again
        </p>
        <p className="mt-6 font-medium leading-8 text-white/60">
          The system cannot find the page you are looking for, maybe you have
          the wrong path or the page has been deleted.
        </p>
        <Button
          className="mx-auto mt-8"
          variant="light"
          color="white"
          size="large"
          asChild
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </section>
    </main>
  );
};

export default NotFoundPage;
