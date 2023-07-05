import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import Background from '~/background-how-we-work.svg';
import Illustration from '~/illustration-how-we-work.svg';

const SectionHowWeWork = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl items-center max-sm:flex-col">
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
      <div className="my-4 flex flex-1 flex-col sm:my-20">
        <SectionBadge>HOW WE WORK?</SectionBadge>
        <span className="mt-1 text-2xl font-bold leading-10 text-white lg:text-3xl lg:leading-[48px]">
          Everything is well planned, well designed and developed wholeheartedly
        </span>
        <p className="mt-4 leading-8 text-white/60 max-sm:text-sm max-sm:leading-6 sm:mt-7">
          Careful planning makes us confident, developed with best practices so
          that the project can be maintained. We always test projects before
          they are shipped.
        </p>
      </div>
    </section>
  );
};

export default SectionHowWeWork;
