import SectionBadge from '@/components/SectionBadge';
import IconSmartphone from '~/icon-smartphone.svg';
import IconMonitor from '~/icon-monitor.svg';
import IconGlobe from '~/icon-globe.svg';
import IconArrowRight from '~/icon-arrow-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import Background from '~/background-development.svg';
import Illustration from '~/illustration-development.svg';

const SectionDevelopment = () => {
  return (
    <section className="mx-auto my-24 flex max-w-5xl gap-16 max-lg:flex-col-reverse">
      <div className="flex flex-1 flex-col">
        <SectionBadge>DEVELOPMENT</SectionBadge>
        <p className="mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Create solutions to repetitive problems, design applications and
          access anywhere!
        </p>
        <p className="mt-7 leading-8 text-white/40">
          Just tell us your repetitive problem or the primitive method used
          today, and we will create a digital solution.
        </p>
        <div className="mt-14 flex flex-col gap-5 font-semibold">
          <p className="flex items-center gap-5 rounded-[3px] border border-white/10 bg-white/5 px-6 py-4">
            <Image alt="" src={IconSmartphone} />
            Mobile App Development
          </p>
          <p className="flex items-center gap-5 rounded-[3px] border border-white/10 bg-white/5 px-6 py-4">
            <Image alt="" src={IconMonitor} />
            Desktop App Development
          </p>
          <p className="flex items-center gap-5 rounded-[3px] border border-white/10 bg-white/5 px-6 py-4">
            <Image alt="" src={IconGlobe} />
            Web Development
          </p>
        </div>
        <Link
          href="/service/development"
          className="ml-auto mt-7 flex gap-5 px-1 font-semibold hover:underline"
        >
          Service Detail <Image alt="" src={IconArrowRight} />
        </Link>
      </div>

      <div className="relative flex flex-1 items-center justify-center max-sm:max-h-[200px]">
        <Image
          alt=""
          src={Background}
          className="object-none opacity-20 blur-[175px]"
        />
        <Image
          alt="Illustration Development"
          src={Illustration}
          className="absolute h-full max-h-[430px] w-auto"
        />
      </div>
    </section>
  );
};

export default SectionDevelopment;
