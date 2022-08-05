import * as React from 'react';
import { PlasmicCompanyLink2, DefaultCompanyLink2Props } from './plasmic/job_run/PlasmicCompanyLink2';
import { ButtonRef, HtmlAnchorOnlyProps, HtmlButtonOnlyProps } from '@plasmicapp/react-web';

interface CompanyLink2Props extends DefaultCompanyLink2Props {}

function CompanyLink2_(props: CompanyLink2Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicCompanyLink2.useBehavior<CompanyLink2Props>(props, ref);
  return <PlasmicCompanyLink2 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<CompanyLink2Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<CompanyLink2Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const CompanyLink2 = React.forwardRef(CompanyLink2_) as any as ButtonComponentType;

export default Object.assign(CompanyLink2, {
  __plumeType: 'button',
});
