import React, { useState, useEffect, createContext } from 'react';
import { CgOptions } from 'react-icons/cg';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken') || null);
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem('refreshToken') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
    const [userId, setUserId] = useState(() => localStorage.getItem('userId') || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        localStorage.setItem('accessToken', accessToken || '');
        localStorage.setItem('refreshToken', refreshToken || '');
        localStorage.setItem('userId', userId || '');
        setIsAuthenticated(!!accessToken);
    }, [accessToken, refreshToken, userId]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refreshAccessToken().catch(console.error);
        }, 8 * 60 * 1000); 

        return () => clearInterval(intervalId);
    }, [refreshToken]);

    const refreshAccessToken = async () => {
        if (!refreshToken) return logout();

        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}auth/refreshtoken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();
            setAccessToken(data.accessToken);
            return data.accessToken;
        } catch (error) {
            console.error("Error refreshing access token:", error);
            setError("Error refreshing access token");
            logout();
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await fetch(`${import.meta.env.VITE_API_URL}auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ refreshToken }),
            });
        } catch (error) {
            console.error("Failed to logout:", error);
            setError("Failed to logout");
        } finally {
            clearAuthData();
        }
    };

    const clearAuthData = () => {
        setAccessToken(null);
        setRefreshToken(null);
        setIsAuthenticated(false);
        setUserId(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        setLoading(false);
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            setUserId(data.userId);
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Login failed");
        } finally {
            setLoading(false);
        }
    };

    const signup = async (email, password) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            setUserId(data.userId);
        } catch (error) {
            console.error("Error signing up:", error);
            setError("Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                isAuthenticated,
                userId,
                loading,
                error,
                setAccessToken,
                setRefreshToken,
                setIsAuthenticated,
                setUserId,
                logout,
                refreshAccessToken,
                login,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
