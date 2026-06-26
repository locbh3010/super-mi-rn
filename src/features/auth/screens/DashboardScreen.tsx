import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AppBar from '@/components/ui/AppBar';
import { useAuthStore } from '@/features/auth/store/authStore';
import { useAppTheme } from '@/theme';

export default function DashboardScreen() {
  const signOut = useAuthStore(s => s.signOut);
  const theme = useAppTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar title="Dashboard" />
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 28, padding: 24 }}>
        <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>
          Dashboard
        </Text>
        <Button
          mode="contained-tonal"
          icon="logout"
          onPress={signOut}
          style={{ borderRadius: theme.radii.pill }}>
          Sign out
        </Button>
      </View>
    </View>
  );
}
