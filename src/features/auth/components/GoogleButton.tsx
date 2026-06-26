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
      contentStyle={{ height: theme.sizes.buttonHeight }}
      labelStyle={{ fontSize: 15, fontWeight: '600', color: theme.colors.onSurface }}
      style={{
        borderRadius: theme.radii.input,
        borderColor: theme.colors.inputBorder,
        backgroundColor: theme.colors.inputBackground,
      }}>
      Continue with Google
    </Button>
  );
}
