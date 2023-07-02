import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import Image from 'next/image';
import Background1 from '~/background-projects-1.svg';
import Background2 from '~/background-projects-2.svg';

const PROJECTS: ProjectCardProps[] = [
  {
    type: 'mobile',
    title: 'The Mobile App Landing Page',
    desc: 'A landing page for mobile app',
    href: '#',
  },
  {
    type: 'desktop',
    title: 'The Desktop App Landing Page',
    desc: 'A landing page for desktop app',
    href: '#',
  },
];

const SectionProjects = () => {
  return (
    <div className="relative">
      <Image alt="" src={Background1} className="absolute top-20" />
      <Image
        alt=""
        src={Background2}
        className="absolute inset-0 top-20 z-[-1] mx-auto"
      />
      <section className="mx-auto mt-28 w-full max-w-5xl border-t border-white/10 py-16 text-center">
        <h2 className="font-semibold tracking-[1.6px] text-green max-sm:text-sm">
          PROJECTS
        </h2>
        <span className="mx-auto mt-1 block max-w-[507px] text-2xl font-bold leading-10 text-white sm:text-3xl sm:leading-[48px]">
          We have completed many amazing projects that you will not believe
        </span>

        <div className="mt-10 flex gap-5 max-sm:flex-col max-sm:gap-10 sm:mt-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} className="flex-1" {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionProjects;
