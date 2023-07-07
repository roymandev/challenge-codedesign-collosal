import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import SectionBadge from '@/components/SectionBadge';
import Image from 'next/image';
import Thumbnail from '~/placeholder-desktop.svg';

const PROJECTS: ProjectCardProps[] = [
  {
    type: 'mobile',
    title: 'The Mobile App Landing Page',
    desc: 'A landing page for mobile app',
    href: '/project/1',
  },
  {
    type: 'desktop',
    title: 'The Desktop App Landing Page',
    desc: 'A landing page for desktop app',
    href: '/project/1',
  },
];

const ProjectDetailPage = () => {
  const data = {
    title: 'The Desktop App Landing Page',
    image: Thumbnail,
    desc: 'Something has always existed. According to physics, there can never\nbe true physical nothingness—though there can be times when\nexistence resembles nothing.',
    category: 'Development',
    client: 'Acme, Inc',
    techs: 'JavaScript, HTML, CSS',
  };

  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="py-20 text-center">
        <SectionBadge>PROJECT DETAIL</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          {data.title}
        </p>
      </section>

      <section className="flex gap-10 border-y border-white/10 px-2 py-16 max-sm:flex-col">
        <div className="relative aspect-square h-min w-full max-w-sm shrink-0 overflow-hidden rounded-[3px] border border-white/10 lg:max-w-[462px]">
          <Image
            alt={data.title}
            src={data.image}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 py-3">
          <p className="leading-8 text-white/60">{data.desc}</p>
          <div className="font-semibold">
            <span className="mb-2 text-sm tracking-[1.4px] text-white/60">
              CATEGORY
            </span>
            <p>{data.category}</p>
          </div>
          <div className="font-semibold">
            <span className="mb-2 text-sm tracking-[1.4px] text-white/60">
              CLIENT
            </span>
            <p>{data.client}</p>
          </div>
          <div className="font-semibold">
            <span className="mb-2 text-sm tracking-[1.4px] text-white/60">
              TECHNOLOGY
            </span>
            <p>{data.techs}</p>
          </div>
        </div>
      </section>

      <section className="pt-20 text-center">
        <SectionBadge>PROJECTS</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Other Amazing Projects
        </p>

        <div className="grid gap-x-5 gap-y-16 pt-24 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} className="flex-1" {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
