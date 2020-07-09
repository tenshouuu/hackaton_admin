import React from 'react';

import { LogoRoot } from './styled';

function Logo({ className }) {
  return (
    <LogoRoot className={className}>
      HRtrack
    </LogoRoot>
  );
}

export default React.memo(Logo);
