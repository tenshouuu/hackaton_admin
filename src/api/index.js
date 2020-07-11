import axios from 'axios';
import { getResumesResponse } from 'api/mockData';

export function fetchData(url, init = {}) {
  const token = localStorage.getItem('token');

  const config = {
    method: 'get',
    ...init,
    url: `${process.env.REACT_APP_API_URL}${url}`,
    headers: {
      ...(init.headers || {}),
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return axios(config)
    .catch((e) => {
      if (e.request.status === 401 && window.location.pathname !== '/login') {
        localStorage.setItem('token', '');
        window.location.pathname = '/login';
      }
      return Promise.reject(e);
    });
}

export function fetchAuthUser(user) {
  return fetchData('/auth/login/', {
    method: 'post',
    data: user,
  });
}

export function fetchUnAuthUser() {
  return fetchData('/auth/logout/', { method: 'post' });
}

export function fetchGetUser() {
  return fetchData('/auth/user/');
}

export function fetchGetResumes({
  offset,
  limit,
}) {
  return fetchData('/resumes/', {
    data: {
      offset,
      limit,
    },
  })
  // mocking
    .catch(() => {})
    .then(() => getResumesResponse({
      offset,
      limit,
    }));
}
