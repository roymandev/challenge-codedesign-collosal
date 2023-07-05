import Button from '@/components/Button';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import SectionBadge from '@/components/SectionBadge';
import Select from '@/components/Select';

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

const ProjectsPage = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-4">
      <section className="flex justify-between gap-10 border-b border-white/10 py-14 max-sm:flex-col sm:items-center sm:py-24">
        <div className="max-w-[502px]">
          <SectionBadge>PROJECTS</SectionBadge>
          <p className="mt-3 text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
            We have completed many amazing projects that you will not believe
          </p>
        </div>
        <div>
          <Select className="px-3">
            <option value="technology">Technology</option>
          </Select>
        </div>
      </section>

      <section className="grid gap-x-5 gap-y-16 py-24 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} className="flex-1" {...project} />
        ))}
      </section>

      <Button className="mx-auto" color="white" variant="light" size="large">
        Load More
      </Button>
    </main>
  );
};

export default ProjectsPage;
