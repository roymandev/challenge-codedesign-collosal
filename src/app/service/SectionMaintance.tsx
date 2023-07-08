import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import Link from 'next/link';
import Background from '~/background-maintenance.svg';
import Illustration from '~/illustration-maintenance.svg';
import IconArrowRight from '~/icon-arrow-right.svg';
import IconDownload from '~/icon-download.svg';
import IconArrowUp from '~/icon-arrow-up.svg';
import IconRefresh from '~/icon-refresh.svg';
import IconCheckCircle from '~/icon-check-circle.svg';

const SectionMaintance = () => {
  return (
    <section className="mx-auto my-24 flex max-w-5xl gap-16 max-lg:flex-col">
      <div className="relative flex flex-1 items-center justify-center max-sm:max-h-[200px]">
        <Image
          alt=""
          src={Background}
          className="object-none opacity-20 blur-[175px]"
        />
        <Image
          alt="Illustration How We Work"
          src={Illustration}
          className="absolute h-full max-h-[543px] w-auto"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <SectionBadge>MAINTENANCE</SectionBadge>
        <p className="mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Think of your server as your own child, taking care of it every day
        </p>
        <p className="mt-7 leading-8 text-white/40">
          We will back up your servers every day, clean them every week, upgrade
          them when there is an update.
        </p>
        <div className="mt-7 grid gap-5 font-medium sm:grid-cols-2">
          <div className="flex items-center gap-6">
            <span className="shrink-0 rounded-[3px] bg-white/5 p-[15px]">
              <Image alt="" src={IconDownload} />
            </span>
            Back up every day
          </div>
          <div className="flex items-center gap-6">
            <span className="shrink-0 rounded-[3px] bg-white/5 p-[15px]">
              <Image alt="" src={IconArrowUp} />
            </span>
            Upgrade
          </div>
          <div className="flex items-center gap-6">
            <span className="shrink-0 rounded-[3px] bg-white/5 p-[15px]">
              <Image alt="" src={IconRefresh} />
            </span>
            Cleaning every week
          </div>
          <div className="flex items-center gap-6">
            <span className="shrink-0 rounded-[3px] bg-white/5 p-[15px]">
              <Image alt="" src={IconCheckCircle} />
            </span>
            Fixing error
          </div>
        </div>
        <Link
          href="/service/maintance"
          className="ml-auto mt-7 flex gap-5 px-1 font-semibold hover:underline"
        >
          Service Detail <Image alt="" src={IconArrowRight} />
        </Link>
      </div>
    </section>
  );
};

export default SectionMaintance;
