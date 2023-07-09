import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import Link from 'next/link';
import Background from '~/background-faq.svg';

const SectionFAQ = () => {
  const faqs: {
    question: string;
    answer: string;
  }[] = [
    {
      question: 'How is the payment system?',
      answer:
        'If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.',
    },
    {
      question: 'Can I consult first?',
      answer:
        'Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.',
    },
    {
      question: 'What if the project stops halfway?',
      answer:
        'We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.',
    },
    {
      question: 'Does it include servers and domains?',
      answer:
        "You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.",
    },
    {
      question: 'Will I get the source code?',
      answer:
        "When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.",
    },
    {
      question: 'Is there a warranty?',
      answer:
        '1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.',
    },
  ];

  return (
    <section className="relative my-16">
      <Image alt="" src={Background} className="absolute" />
      <header className="py-20 text-center">
        <SectionBadge>FAQ</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-3xl sm:leading-[54px]">
          Frequently asked questions, maybe the same as yours
        </p>
      </header>

      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2">
        {faqs.map((faq, index) => (
          <article key={index}>
            <h3 className="text-xl font-bold">{faq.question}</h3>
            <p className="mt-[10px] font-medium leading-8 text-white/60">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-24 text-center">
        Didn&apos;t find an answer?{' '}
        <Link
          href="/contact"
          className="border-b border-primary font-bold text-primary"
        >
          Do not hesitate to ask!
        </Link>
      </p>
    </section>
  );
};

export default SectionFAQ;
