import Image from 'next/image';
import Link from 'next/link';

export type BlogCardProps = {
  id: string;
  image: string;
  title: string;
  desc: string;
  author: {
    picture: string;
    name: string;
  };
  publishedAt: string;
  readTime: string;
};

const BlogCard = ({
  id,
  image,
  title,
  desc,
  author,
  publishedAt,
  readTime,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <article className="flex flex-col">
        <div className="relative h-[220px] overflow-hidden rounded-[5px]">
          <Image
            alt={`${title} thumbnails`}
            src={image}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mt-7 text-xl font-bold leading-[34px]">{title}</h3>
        <p className="mt-3 text-lg font-medium leading-[34px] text-white/60">
          {desc}
        </p>
        <div className="mt-7 flex items-center gap-5">
          <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image
              alt={`${author.name} picture`}
              src={author.picture}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{author.name}</span>
            <p className="text-sm text-white/60">
              {publishedAt} • {readTime} read
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
