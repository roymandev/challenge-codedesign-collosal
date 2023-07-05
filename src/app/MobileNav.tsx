'use client';

import Button from '@/components/Button';
import { useDisclosure } from '@/hooks/useDisclosure';
import twclsx from '@/lib/twclsx';
import Image from 'next/image';
import Link from 'next/link';
import IconBars from '~/icon-bars.svg';

type Props = {
  className?: string;
  navLinks: { label: string; href: string }[];
  contactButton: React.ReactNode;
};

const MobileNav = ({ className, navLinks, contactButton }: Props) => {
  const [navOpen, handlers] = useDisclosure();

  return (
    <>
      <div className={twclsx(className, 'relative z-20')}>
        <Button
          variant="light"
          color="white"
          className="w-[39px] bg-transparent px-0 transition-colors hover:bg-white/10"
          onClick={handlers.toggle}
        >
          <Image alt="" src={IconBars} />
        </Button>
      </div>
      <div
        className={twclsx(
          'fixed inset-0 z-10 bg-dark/50 backdrop-blur-lg opacity-100 transition-opacity duration-500 pt-40 flex flex-col',
          !navOpen && 'opacity-0 pointer-events-none',
        )}
      >
        <nav className="flex flex-1 flex-col items-center gap-[50px]">
          {navLinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {nav.label}
            </Link>
          ))}
          {contactButton}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
