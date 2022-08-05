import React from 'react';
import { IEmpresa } from '../../shared/models';
import CompanyLink2 from '../CompanyLink2';
import BehancesvgIcon from '../plasmic/job_run/icons/PlasmicIcon__Behancesvg';
import GmailsvgIcon from '../plasmic/job_run/icons/PlasmicIcon__Gmailsvg';
import Icon8Icon from '../plasmic/job_run/icons/PlasmicIcon__Icon8';
import LinkedInsvgIcon from '../plasmic/job_run/icons/PlasmicIcon__LinkedInsvg';
import TwittersvgIcon from '../plasmic/job_run/icons/PlasmicIcon__Twittersvg';

function CompanyLinks({empresa}: {empresa: IEmpresa}) {
  return (
    <>
      <CompanyLink2
        showStartIcon
        label="Web"
        target="_blank"
        link={empresa?.url}
        startIcon={<Icon8Icon width="25px" color="#6B0DF8" height="25px" />}
      />
      <CompanyLink2
        showStartIcon
        label="Twitter"
        target="_blank"
        link={empresa?.enlaceTwitter}
        startIcon={<TwittersvgIcon width="25px" color="#0DB1F8" height="25px" />}
      />
      <CompanyLink2
        showStartIcon
        label="LinkedIn"
        target="_blank"
        link={empresa?.enlaceLinkedin}
        startIcon={<LinkedInsvgIcon width="25px" color="#0D6BF8" height="25px" />}
      />
      <CompanyLink2
        showStartIcon
        label="Behance"
        target="_blank"
        link={empresa?.enlaceBehance}
        startIcon={<BehancesvgIcon width="25px" color="#0D95F8" height="25px" />}
      />
      <CompanyLink2
        showStartIcon
        label="Gmail"
        target="_blank"
        link={'mailto:' + empresa?.email}
        startIcon={<GmailsvgIcon width="25px" color="#D85F4F" height="25px" />}
      />
    </>
  );
}

export default CompanyLinks;
