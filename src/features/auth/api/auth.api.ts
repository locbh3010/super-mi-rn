import { account } from '@/lib/appwrite';
import { ID } from 'react-native-appwrite';
import type { LoginValues, RegisterValues } from '../schemas/auth.schema';

export const authApi = {
  login: async ({ email, password }: LoginValues) => {
    return await account.createEmailPasswordSession({ email, password });
  },

  register: async ({ email, password }: Omit<RegisterValues, 'confirmPassword'>) => {
    const name = email.split('@')[0];
    const user = await account.create({ userId: ID.unique(), email, password, name });
    const session = await account.createEmailPasswordSession({ email, password });
    return { user, session };
  },

  logout: async () => {
    return await account.deleteSession({ sessionId: 'current' });
  },

  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },
};
