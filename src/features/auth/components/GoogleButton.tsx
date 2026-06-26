import { Button } from 'react-native-paper';
import { useAuthStore } from '@/features/auth/store/authStore';

export default function GoogleButton() {
  const signIn = useAuthStore(s => s.signIn);

  return (
    <Button mode="outlined" icon="google" onPress={signIn}>
      Continue with Google
    </Button>
  );
}
