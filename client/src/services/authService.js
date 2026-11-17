import api from '../api/axios';
import { TOKEN_KEY, USER_KEY } from '../constants';

export async function login(credentials) {
  const res = await api.post('/auth/login', credentials);
  return res.data;
}

export function saveAuth(token, user) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredUser() {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}
