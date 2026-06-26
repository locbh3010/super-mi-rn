import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { useAuthStore } from '@/features/auth';
import { appTheme } from '@/theme';

const NavTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: appTheme.colors.background,
    card: appTheme.colors.background,
  },
};

function RootNavigator() {
  const session = useAuthStore(s => s.session);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="auth" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ backgroundColor: appTheme.colors.background }}>
      <PaperProvider theme={appTheme} settings={{ rippleEffectEnabled: true }}>
        <StatusBar style="light" />
        <QueryClientProvider client={queryClient}>
          <ThemeProvider value={NavTheme}>
            <RootNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
