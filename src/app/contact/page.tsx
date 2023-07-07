import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import IconPhone from '~/icon-phone-call.svg';
import IconMail from '~/icon-mail.svg';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';

const page = () => {
  return (
    <main className="mx-auto my-32 flex w-full max-w-5xl justify-between gap-10 px-4 max-sm:flex-col sm:gap-4">
      <section className="max-w-[502px]">
        <SectionBadge>CONTACT</SectionBadge>
        <p className="mt-3 text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          We love receiving messages from you, we are waiting for it.
        </p>

        <div className="mt-14 flex gap-7">
          <span className="rounded-[3px] bg-white/5 p-5">
            <Image alt="" src={IconPhone} />
          </span>
          <div className="flex flex-col justify-center">
            <span className="text-white/60">Phone</span>
            <span className="font-bold">+62 1234 8921</span>
          </div>
        </div>
        <div className="mt-7 flex gap-7">
          <span className="rounded-[3px] bg-white/5 p-5">
            <Image alt="" src={IconMail} />
          </span>
          <div className="flex flex-col justify-center">
            <span className="text-white/60">Email</span>
            <span className="font-bold">support@collosal.tld</span>
          </div>
        </div>
      </section>

      <div className="grid w-full max-w-[412px] shrink-0 grid-cols-2 content-start gap-x-[18px] gap-y-7 rounded-[5px] bg-white/5 px-4 py-6 sm:p-9">
        <div className="flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Name</span>
          <Input />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Email</span>
          <Input />
        </div>
        <div className="col-span-2 flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Subject</span>
          <Input />
        </div>
        <div className="col-span-2 flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Message</span>
          <Textarea className="min-h-[130px]" />
        </div>
        <Button size="large" className="col-span-2">
          Send Message
        </Button>
      </div>
    </main>
  );
};

export default page;
