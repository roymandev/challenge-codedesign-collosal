import BlogCard, { BlogCardProps } from '@/components/BlogCard';
import Button from '@/components/Button';
import SectionBadge from '@/components/SectionBadge';

const BLOGS: BlogCardProps[] = Array(6).fill({
  id: '1',
  image: '/example-blog-thumb.jpg',
  title: 'SEO tricks that can increase the traffic of your website',
  desc: 'People have been using wrong SEO techniques on their websites.',
  author: {
    picture: '/example-author.png',
    name: 'Jane Cooper',
  },
  publishedAt: 'Mar 18',
  readTime: '5 min',
});

const BlogPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="border-b border-white/10 py-24 text-center">
        <SectionBadge>BLOG</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Get precise knowledge wherever you are
        </p>
      </section>

      <div className="my-24 grid gap-x-[18px] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <Button className="mx-auto" color="white" variant="light" size="large">
        Load More
      </Button>
    </main>
  );
};

export default BlogPage;
