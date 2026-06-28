import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { authApi } from '../api/auth.api';
import { useAuthStore } from '../store/authStore';

export function useRegisterMutation() {
  const setAuth = useAuthStore(s => s.setAuth);

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: async ({ session, user }) => {
      setAuth(session, user);
    },
    onError: (err: any) => {
      Alert.alert(
        'Authentication Failed',
        err?.message || 'Something went wrong. Please try again.',
      );
    },
  });
}
