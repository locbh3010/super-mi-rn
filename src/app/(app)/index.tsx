import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AppBar from '@/components/ui/AppBar';
import { useSession } from '@/hooks/useAuth';

export default function DashboardScreen() {
  const { signOut } = useSession();

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
