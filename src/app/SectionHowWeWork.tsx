import Image from 'next/image';
import Background from '~/background-how-we-work.svg';
import Illustration from '~/illustration-how-we-work.svg';

const SectionHowWeWork = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl items-center">
      <div className="relative flex flex-1 items-center">
        <Image alt="" src={Background} className="opacity-20 blur-[175px]" />
        <Image
          alt="Illustration How We Work"
          src={Illustration}
          className="absolute"
        />
      </div>
      <div className="my-20 flex flex-1 flex-col">
        <h2 className="font-semibold tracking-[1.6px] text-green">
          HOW WE WORK?
        </h2>
        <span className="mt-1 text-3xl font-bold leading-[48px] text-white">
          Everything is well planned, well designed and developed wholeheartedly
        </span>
        <p className="mt-7 leading-8 text-white/60">
          Careful planning makes us confident, developed with best practices so
          that the project can be maintained. We always test projects before
          they are shipped.
        </p>
      </div>
    </section>
  );
};

export default SectionHowWeWork;
