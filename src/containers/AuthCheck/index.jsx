import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFetchGetInitUser } from 'store/user';

function AuthCheck({ children }) {
  const { pathname } = useLocation();
  const isLogin = useSelector(state => state.user.login);
  const [loading, setLoading] = useState(true);
  const checkUser = useFetchGetInitUser();
  useEffect(() => {
    checkUser()
      .catch(() => {

      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || (!isLogin && pathname !== '/login')) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}

export default React.memo(AuthCheck);
