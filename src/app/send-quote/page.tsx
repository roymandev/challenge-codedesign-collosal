import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';

const page = () => {
  return (
    <main className="mx-auto my-32 flex w-full max-w-5xl justify-between gap-10 px-4 max-sm:flex-col sm:gap-4">
      <section className="max-w-[502px]">
        <h2 className="font-semibold tracking-[1.6px] text-green max-sm:text-sm">
          SEND QUOTE
        </h2>
        <p className="mt-3 text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Tell us about your problem and how we can help
        </p>
        <p className="mt-6 leading-8 text-white/60 max-sm:text-sm max-sm:leading-6">
          We are happy to help you, tell us what is the problem with your
          company, and we are ready to answer these problems. It usually takes a
          few minutes for us to respond.
        </p>

        <Button
          variant="light"
          color="white"
          className="mt-12 max-sm:h-[46px] max-sm:text-sm"
          size="large"
        >
          Ask Us
        </Button>
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
        <div className="flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Company</span>
          <Input />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Company Size</span>
          <Select>
            <option value="" disabled selected></option>
            <option value="<100">&lt;100</option>
            <option value="<1000">&lt;1000</option>
            <option value=">1000">&gt;1000</option>
          </Select>
        </div>
        <div className="col-span-2 flex flex-col gap-[6px]">
          <span className="text-sm text-white/60">Tell Us Your Problem</span>
          <Textarea className="min-h-[130px]" />
        </div>
        <Button size="large" className="col-span-2">
          Send Quote
        </Button>
      </div>
    </main>
  );
};

export default page;
