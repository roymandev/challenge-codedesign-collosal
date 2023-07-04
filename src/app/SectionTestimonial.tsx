'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard, {
  TestimonialCardProps,
} from '@/components/TestimonialCard';
import clsx from 'clsx';
import Image from 'next/image';
import Background from '~/background-testimonial.svg';

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    image: '/avatar-1.png',
    name: 'Courtney Henry',
    company: 'Biffco Enterprises Ltd.',
    comment: `"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."`,
  },
  {
    image: '/avatar-2.png',
    name: 'Esther Howard',
    company: 'Abstergo Ltd.',
    comment: `"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`,
  },
  {
    image: '/avatar-3.png',
    name: 'Ronald Richards',
    company: 'Barone LLC.',
    comment: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
  },
  {
    image: '/avatar-1.png',
    name: 'Courtney Henry',
    company: 'Biffco Enterprises Ltd.',
    comment: `"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."`,
  },
  {
    image: '/avatar-2.png',
    name: 'Esther Howard',
    company: 'Abstergo Ltd.',
    comment: `"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`,
  },
  {
    image: '/avatar-3.png',
    name: 'Ronald Richards',
    company: 'Barone LLC.',
    comment: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
  },
  {
    image: '/avatar-1.png',
    name: 'Courtney Henry',
    company: 'Biffco Enterprises Ltd.',
    comment: `"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."`,
  },
  {
    image: '/avatar-2.png',
    name: 'Esther Howard',
    company: 'Abstergo Ltd.',
    comment: `"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`,
  },
  {
    image: '/avatar-3.png',
    name: 'Ronald Richards',
    company: 'Barone LLC.',
    comment: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
  },
];

const SectionTestimonial = () => {
  return (
    <section className="relative mt-32 text-center lg:mx-16">
      <Image
        alt=""
        src={Background}
        className="absolute object-contain object-center opacity-20 blur-[175px]"
        fill
      />
      <h2 className="font-semibold tracking-[1.6px] text-green max-sm:text-sm">
        TESTIMONIAL
      </h2>

      <span className="mx-auto mt-1 block max-w-[507px] text-xl font-bold leading-8 text-white sm:text-3xl sm:leading-[48px]">
        What do our clients say that we never let down?
      </span>

      <div className="py-24">
        <Slider
          dots
          infinite={false}
          arrows={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          className={clsx(
            '[&_.slick-slide]:mt-10 [&_.slick-slide]:transition-[margin] [&_.slick-slide]:duration-[1s]',
            'lg:[&_.slick-current+div]:!mt-0 max-lg:[&_.slick-current]:!mt-0',
            'lg:[&_.slick-current+div_article]:border lg:[&_.slick-current+div_article]:border-primary lg:[&_.slick-current+div_article]:!text-white',
            'max-lg:[&_.slick-current_article]:border max-lg:[&_.slick-current_article]:border-primary max-lg:[&_.slick-current_article]:!text-white',
          )}
          dotsClass="[&_button:before]:!text-sm [&>li]:!mx-[2px] slick-dots [&_button:before]:!text-white [&_button:before]:transition-opacity !-bottom-20"
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 760,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 640,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} className="mx-4" />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionTestimonial;
