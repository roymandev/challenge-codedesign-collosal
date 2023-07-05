import Button from '@/components/Button';
import Image from 'next/image';
import Illustration from '~/illustration-our-team.svg';
import Background from '~/background-our-team.svg';
import Link from 'next/link';
import SectionBadge from '@/components/SectionBadge';

const SectionOurTeam = () => {
  return (
    <section className="mx-auto mt-20 flex w-full max-w-5xl max-sm:flex-col-reverse sm:mt-10">
      <div className="my-4 flex max-w-[415px] flex-1 flex-col items-start sm:my-16">
        <SectionBadge>OUR TEAM</SectionBadge>
        <span className="mt-1 text-2xl font-bold leading-10 text-white sm:text-3xl sm:leading-[48px]">
          We&apos;re a team of designers, engineers and analysts
        </span>
        <p className="mt-4 leading-8 text-white/60 max-sm:text-sm max-sm:leading-6 sm:mt-7">
          Our team consists of many creative people. We are committed to
          maintaining quality work as well as speed. These creative people work
          together to create maximum work results.
        </p>
        <Button
          className="mt-6 sm:mt-12"
          color="white"
          variant="light"
          size="large"
        >
          <Link href="/about#our-team">See Our Teams</Link>
        </Button>
      </div>

      <div className="relative flex flex-1 items-center justify-center max-sm:max-h-[200px]">
        <Image
          alt=""
          src={Background}
          className="object-none opacity-20 blur-[175px]"
        />
        <Image
          alt="Illustration How We Work"
          src={Illustration}
          className="absolute h-full w-auto"
        />
      </div>
    </section>
  );
};

export default SectionOurTeam;
