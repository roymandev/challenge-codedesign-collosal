import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import Background from '~/background-header.svg';
import Logo from '~/logo.svg';
import MobileNav from './MobileNav';

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/service',
  },
  {
    label: 'How We Work',
    href: '/#how-we-work',
  },
  {
    label: 'Projects',
    href: '/project',
  },
  {
    label: 'About',
    href: '/#about',
  },
];

const Header = () => {
  return (
    <>
      <Image
        alt=""
        src={Background}
        className="absolute top-0 -z-10 object-contain opacity-[.12] blur-[175px]"
      />

      <header className="mx-auto mt-14 flex w-full max-w-5xl items-center px-8">
        <Link href="/" className="relative z-20 w-[138px]">
          <Image alt="Collosal Logo" src={Logo} />
        </Link>

        {/* Desktop Nav */}
        <div className="flex flex-1 items-center max-lg:hidden">
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
            <ContactButton />
          </div>
        </div>

        <MobileNav
          className="ml-auto lg:hidden"
          navLinks={NAV_LINKS}
          contactButton={<ContactButton />}
        />
      </header>
    </>
  );
};

const ContactButton = () => (
  <Button asChild color="white" variant="light">
    <Link href="/contact">Contact</Link>
  </Button>
);

export default Header;
