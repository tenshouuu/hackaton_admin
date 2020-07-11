import React from 'react';

import { SocialsRoot, StyledLink } from './styled';

const socilsIcons = {
  hh: (<img src="/images/hh.png" width="32" style={{ borderRadius: '50%' }} />),
  linkedin: (<img src="/images/linkedin.png" />),
  email: (<img src="/images/mail.png" />),
  phone: (<img src="/images/phone.png" />),
  facebook: (<img src="/images/facebook.png" />),
  github: (<img src="/images/github.png" />),
};

function Socials({ contacts, className }) {
  return (
    <SocialsRoot className={className}>
      {Object.keys(contacts).map((key) => {
        const ContactIcon = socilsIcons[key] || null;
        let link = contacts[key] || null;
        if (!link) {
          return null;
        }

        if (key === 'email') {
          link = `mailto:${link}`;
        }

        if (key === 'phone') {
          link = `tel:${link}`;
        }

        return (
          <StyledLink key={key} href={link} target="_blank" rel="noopener noreferrer">
            {ContactIcon || link}
          </StyledLink>
        );
      })}
    </SocialsRoot>
  );
}

export default React.memo(Socials);
