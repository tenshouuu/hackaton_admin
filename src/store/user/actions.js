import { fetchAuthUser, fetchUnAuthUser, fetchGetUser } from 'api';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const useFetchGetInitUser = () => {
  const dispatch = useDispatch();
  return () => fetchGetUser()
    .then((response) => {
      const { data = {} } = response;
      console.log(data);
      if (data) {
        dispatch(addUser({
          ...data,
          login: true,
        }));
        dispatch(loginUser(true));
        return data;
      }
      return null;
    });
};

export const useAuthUser = () => {
  const dispatch = useDispatch();
  return (user) => fetchAuthUser(user)
    .catch((e) => message.error('Неверные данные'))
    .then((response) => {
        console.log(response);
        if (!response) {
        return response;
      }
      const { data = {} } = response;
      if (data.token) {
        localStorage.setItem('token', data.token);
        dispatch(addUser(data.user));
        dispatch(loginUser(true));
      }
    });
};

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  return () => fetchUnAuthUser()
    .finally(() => {
      localStorage.setItem('token', '');
      dispatch(loginUser(false));
    });
};
