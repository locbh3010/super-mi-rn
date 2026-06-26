import { createContext, PropsWithChildren, use, useMemo, useState } from 'react';

type AuthContextValue = {
  session: string | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<string | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      signIn: () => setSession('mock-session'),
      signOut: () => setSession(null),
    }),
    [session],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}
