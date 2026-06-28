import { create } from 'zustand';
import { authApi } from '../api/auth.api';
import type { LoginValues, RegisterValues } from '../schemas/auth.schema';

type AuthState = {
  session: any | null;
  user: any | null;
  isLoading: boolean;
  isInitializing: boolean;
  error: string | null;
  signIn: (values: LoginValues) => Promise<void>;
  signUp: (values: RegisterValues) => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
  setAuth: (session: any, user: any) => void;
};

export const useAuthStore = create<AuthState>(set => ({
  session: null,
  user: null,
  isLoading: false,
  isInitializing: true,
  error: null,
  setAuth: (session, user) => set({ session, user }),

  signIn: async values => {
    set({ isLoading: true, error: null });
    try {
      const session = await authApi.login(values);
      const user = await authApi.getCurrentUser();
      set({ session, user, isLoading: false });
    } catch (err: any) {
      const errMsg = err?.message || 'Login failed';
      set({ error: errMsg, isLoading: false });
      throw err;
    }
  },

  signUp: async values => {
    set({ isLoading: true, error: null });
    try {
      const { session, user } = await authApi.register(values);
      set({ session, user, isLoading: false });
    } catch (err: any) {
      const errMsg = err?.message || 'Registration failed';
      set({ error: errMsg, isLoading: false });
      throw err;
    }
  },

  signOut: async () => {
    set({ isLoading: true, error: null });
    try {
      await authApi.logout();
    } catch (err) {
      console.error('Failed to logout of Appwrite session:', err);
    } finally {
      set({ session: null, user: null, isLoading: false });
    }
  },

  initialize: async () => {
    try {
      const user = await authApi.getCurrentUser();
      if (user) {
        set({ user, session: 'active-session', isInitializing: false });
      } else {
        set({ user: null, session: null, isInitializing: false });
      }
    } catch (err) {
      set({ user: null, session: null, isInitializing: false });
    }
  },
}));
