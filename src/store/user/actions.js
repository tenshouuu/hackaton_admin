import {
  fetchAuthUser,
  fetchUnAuthUser,
  fetchGetUser,
  fetchGetLinkedEmails, fetchDeleteLinkedEmail, fetchAddLinkedEmail,
} from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

export const ADD_USER = 'ADD_USER';
export const ADD_SENDER_EMAILS_USER = 'ADD_SENDER_EMAILS_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const addSenderEmails = (payload) => ({
  type: ADD_SENDER_EMAILS_USER,
  payload,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const useFetchGetSenderEmails = () => {
  const dispatch = useDispatch();
  return () => fetchGetLinkedEmails()
    .catch((e) => message.error(e.message))
    .then((resp = {}) => {
      const { data } = resp;
      if (data && data.results) {
        dispatch(addSenderEmails(data.results));
      }
      return data;
    });
};

export const useFetchAddSenderEmail = () => {
  const fetchSenderEmails = useFetchGetSenderEmails();

  return (email) => fetchAddLinkedEmail(email)
    .catch((e) => {
      message.error(e.message);
    })
    .then(() => fetchSenderEmails());
};

export const useFetchDeleteSenderEmail = () => {
  const dispatch = useDispatch();
  const senderEmails = useSelector((state) => state.user.senderEmails);
  return (id) => {
    const excludedEmailsById = [];
    const savedSenderEmails = senderEmails.map((item) => {
      if (item.id !== id) {
        excludedEmailsById.push(item);
      }
      return item;
    });
    dispatch(addSenderEmails(excludedEmailsById));
    return fetchDeleteLinkedEmail(id)
      .catch(() => {
        dispatch(addSenderEmails(savedSenderEmails));
      });
  };
};

export const useFetchGetInitUser = () => {
  const dispatch = useDispatch();
  return () => fetchGetUser()
    .then((response = {}) => {
      const { data } = response;
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
