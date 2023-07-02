import Button from '@/components/Button';
import Image from 'next/image';
import Illustration from '~/illustration-our-team.svg';
import Background from '~/background-our-team.svg';
import Link from 'next/link';

const SectionOurTeam = () => {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-5xl">
      <div className="my-16 max-w-[415px] flex-1">
        <h2 className="font-semibold tracking-[1.6px] text-green">OUR TEAM</h2>
        <span className="mt-1 text-3xl font-bold leading-[48px] text-white">
          We&apos;re a team of designers, engineers and analysts
        </span>
        <p className="mt-7 leading-8 text-white/60">
          Our team consists of many creative people. We are committed to
          maintaining quality work as well as speed. These creative people work
          together to create maximum work results.
        </p>
        <Button className="mt-12" color="white" variant="light" size="large">
          <Link href="/about#our-team">See Our Teams</Link>
        </Button>
      </div>
      <div className="relative flex flex-1 items-center">
        <Image alt="" src={Background} className="opacity-20 blur-[175px]" />
        <Image
          alt="Illustration How We Work"
          src={Illustration}
          className="absolute"
        />
      </div>
    </section>
  );
};

export default SectionOurTeam;
