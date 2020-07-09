import React from 'react';

import { AuthCheckRoot } from './styled'

function AuthCheck({ children }) {
 return (
   <AuthCheckRoot>
       {children}
   </AuthCheckRoot>
 );
}


export default React.memo(AuthCheck)
