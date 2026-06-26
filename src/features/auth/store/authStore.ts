import { create } from 'zustand';

type AuthState = {
  session: string | null;
  signIn: () => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  session: null,
  signIn: () => set({ session: 'mock-session' }),
  signOut: () => set({ session: null }),
}));
