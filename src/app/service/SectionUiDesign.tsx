import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import Illustration from '~/illustration-ui-design.svg';
import IconLayout from '~/icon-layout.svg';
import IconMousePointer from '~/icon-mouse-pointer.svg';
import Link from 'next/link';
import IconArrowRight from '~/icon-arrow-right.svg';

const SectionUiDesign = () => {
  return (
    <section className="mx-auto my-24 grid max-w-6xl gap-16 lg:grid-cols-2">
      <Image
        alt="Ui Design Illustration"
        src={Illustration}
        className="max-lg:mx-auto"
      />
      <div className="flex flex-col">
        <SectionBadge>UI DESIGN</SectionBadge>
        <p className="mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Don&apos;t let your idea get caught by others, design a prototype for
          your idea
        </p>
        <p className="mt-7 leading-8 text-white/40">
          Delegate your ideas as quickly as possible, create beautiful designs
          and vivid prototypes.
        </p>
        <div className="mt-14 flex gap-5 max-sm:flex-col">
          <div className="flex-1 rounded-[3px] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4 font-semibold">
              <Image alt="" src={IconLayout} />
              Beautiful Design
            </div>
            <p className="mt-4 text-white/60">
              Create a modern design for your idea.
            </p>
          </div>
          <div className="flex-1 rounded-[3px] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4 font-semibold">
              <Image alt="" src={IconMousePointer} />
              Card Name
            </div>
            <p className="mt-4 text-white/60">
              Create vivid prototypes for your designs.
            </p>
          </div>
        </div>
        <Link
          href="/service/ui-design"
          className="ml-auto mt-7 flex gap-5 px-1 font-semibold hover:underline"
        >
          Service Detail <Image alt="" src={IconArrowRight} />
        </Link>
      </div>
    </section>
  );
};

export default SectionUiDesign;
