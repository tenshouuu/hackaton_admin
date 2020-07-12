import axios from 'axios';
import { getResumesResponse } from 'api/mockData';

function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

export function fetchData(url, init = {}) {
  const token = localStorage.getItem('token');
  deleteAllCookies();

  const config = {
    method: 'get',
    ...init,
    url: `${process.env.REACT_APP_API_URL}${url}`,
    headers: {
      ...(init.headers || {}),
    },
  };

  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return axios(config)
    .catch((e) => {
      if (e.request.status === 401) {
        localStorage.setItem('token', '');
        if (window.location.pathname !== '/login') {
          window.location.pathname = '/login';
        }
      }
      return Promise.reject(e);
    });
}

export function fetchAuthUser(user) {
  return fetchData('/auth/login/', {
    method: 'POST',
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
  return fetchData(`/resumes/?offset=${offset}&limit=${limit}`);
}

export function fetchGetResume(id) {
  return fetchData(`/resumes/${id}/`);
}

export function fetchGetLinkedEmails() {
  return fetchData('/linked-emails/');
}

export function fetchAddLinkedEmail(email) {
  return fetchData('/linked-emails/', {
    method: 'post',
    data: { email },
  });
}

export function fetchDeleteLinkedEmail(id) {
  return fetchData(`/linked-emails/${id}/`, {
    method: 'delete',
  });
}

export function fetchAddResume(resume) {
  return fetchData('/resumes/', {
    method: 'post',
    data: resume,
  });
}
