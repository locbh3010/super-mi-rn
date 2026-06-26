import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AppBar from '@/components/ui/AppBar';
import { useAuthStore } from '@/features/auth/store/authStore';

export default function DashboardScreen() {
  const signOut = useAuthStore(s => s.signOut);

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Dashboard" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <Text variant="headlineMedium">Dashboard</Text>
        <Button mode="outlined" onPress={signOut}>
          Sign out
        </Button>
      </View>
    </View>
  );
}
