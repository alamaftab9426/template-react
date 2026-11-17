import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getStoredUser } from '../services/authService';
import { getToken, setTokenHeader } from '../utils/helpers';
import * as authService from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser());
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = getToken();
    setTokenHeader(token);
  }, []);

  const login = useCallback(async (credentials) => {
    setLoading(true);
    try {
      const data = await authService.login(credentials);
      // Expecting { token, user }
      const { token, user: returnedUser } = data;
      if (token) {
        authService.saveAuth(token, returnedUser);
        setTokenHeader(token);
        setUser(returnedUser || null);
        setIsAuthenticated(true);
      }
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setTokenHeader(null);
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
