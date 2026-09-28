'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AppContextType {
  user: User | null;
  cart: string[];
  enrolledCourses: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  login: (email: string, name?: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
  addToCart: (courseId: string) => void;
  removeFromCart: (courseId: string) => void;
  enrollCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  isInCart: (courseId: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(['build-digital-asset']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Load persisted state from localStorage if available
    const savedUser = localStorage.getItem('bytespace_user');
    const savedCart = localStorage.getItem('bytespace_cart');
    const savedEnrolled = localStorage.getItem('bytespace_enrolled');

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default demo logged in user for showcase
      const demoUser = {
        id: 'u-1',
        name: 'Shafin Ahmed',
        email: 'shafin@bytespace.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      };
      setUser(demoUser);
    }

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }

    if (savedEnrolled) {
      try {
        setEnrolledCourses(JSON.parse(savedEnrolled));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const login = (email: string, name?: string) => {
    const newUser: User = {
      id: 'u-' + Date.now(),
      name: name || email.split('@')[0] || 'Learner',
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    };
    setUser(newUser);
    localStorage.setItem('bytespace_user', JSON.stringify(newUser));
  };

  const register = (name: string, email: string) => {
    login(email, name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bytespace_user');
  };

  const addToCart = (courseId: string) => {
    if (!cart.includes(courseId)) {
      const newCart = [...cart, courseId];
      setCart(newCart);
      localStorage.setItem('bytespace_cart', JSON.stringify(newCart));
    }
  };

  const removeFromCart = (courseId: string) => {
    const newCart = cart.filter((id) => id !== courseId);
    setCart(newCart);
    localStorage.setItem('bytespace_cart', JSON.stringify(newCart));
  };

  const enrollCourse = (courseId: string) => {
    if (!enrolledCourses.includes(courseId)) {
      const updated = [...enrolledCourses, courseId];
      setEnrolledCourses(updated);
      localStorage.setItem('bytespace_enrolled', JSON.stringify(updated));
    }
    removeFromCart(courseId);
  };

  const isEnrolled = (courseId: string) => enrolledCourses.includes(courseId);
  const isInCart = (courseId: string) => cart.includes(courseId);

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        enrolledCourses,
        searchQuery,
        setSearchQuery,
        login,
        register,
        logout,
        addToCart,
        removeFromCart,
        enrollCourse,
        isEnrolled,
        isInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
