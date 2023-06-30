import Button from '@/components/Button';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'How We Work',
    href: '/#how-we-work',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'About',
    href: '/#about',
  },
];

const Header = () => {
  return (
    <>
      <div
        className={clsx(
          'absolute inset-x-0 top-0 -z-10 pb-10',
          'after:absolute after:inset-0 after:bg-[#0B0B22]/90 after:backdrop-blur-[175px]',
        )}
      >
        <Image
          alt=""
          src="/background-header.svg"
          width={1440}
          height={944}
          className="object-contain"
        />
      </div>
      <header className="mx-auto mt-14 flex w-full max-w-5xl items-center px-4">
        <Link href="/" className="w-[138px]">
          <Image alt="Collosal Logo" src="/logo.svg" width={138} height={31} />
        </Link>

        <nav className="flex flex-1 justify-center gap-[50px]">
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {nav.label}
            </Link>
          ))}
        </nav>

        <div className="flex w-[138px] justify-end">
          <Button asChild color="white" variant="light">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
