import React from 'react';

import { LogoRoot } from './styled';

function Logo({ className }) {
  return (
    <LogoRoot className={className}>
      HR Track
    </LogoRoot>
  );
}

export default React.memo(Logo);
