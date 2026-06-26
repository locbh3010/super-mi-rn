import { Button } from 'react-native-paper';
import { useAuthStore } from '@/features/auth/store/authStore';
import { useAppTheme } from '@/theme';

export default function GoogleButton() {
  const theme = useAppTheme();
  const signIn = useAuthStore(s => s.signIn);

  return (
    <Button
      mode="outlined"
      icon="google"
      onPress={signIn}
      contentStyle={{ height: 52 }}
      labelStyle={{ fontSize: 15, fontWeight: '600', color: theme.colors.onSurface }}
      style={{
        borderRadius: 16,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
      }}>
      Continue with Google
    </Button>
  );
}
