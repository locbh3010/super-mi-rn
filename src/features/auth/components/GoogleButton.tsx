import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppTheme } from '@/theme';

interface GoogleButtonProps {
  disabled?: boolean;
}

export default function GoogleButton({ disabled }: GoogleButtonProps) {
  const theme = useAppTheme();

  return (
    <Button
      mode="outlined"
      icon="google"
      onPress={() => Alert.alert('Google Sign-In', 'Google sign-in is not implemented yet.')}
      disabled={disabled}
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
