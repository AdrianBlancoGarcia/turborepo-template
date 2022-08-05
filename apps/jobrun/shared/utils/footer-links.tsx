import { useRouter } from 'next/router';

import LinkJr2 from '../../components/LinkJr2';

type FooterLink = {
  label: string;
  href: string;
  target?: string;
  dataCy?: string;
  isButton?: boolean;
  startIcon?: React.ReactNode;
};

export const getFooterLinks = (links: FooterLink[]) => {
  const router = useRouter();

  return links.map((link) => (
    <LinkJr2
      data-cy={link.dataCy}
      size="minimal"
      href={link.href}
      label={link.label}
      target={link.target}
      isButton={link.isButton}
      startIcon={link.startIcon}
      showStartIcon={!!link.startIcon}
      onClick={() => router.push(link.href)}
    />
  ));
};
