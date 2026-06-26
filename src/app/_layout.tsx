import {Stack} from 'expo-router';
import {MD3DarkTheme, PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {SessionProvider, useSession} from '@/hooks/useAuth';

function RootNavigator() {
  const {session} = useSession();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: MD3DarkTheme.colors.background,
        },
      }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen options={{
          contentStyle: {
            backgroundColor: MD3DarkTheme.colors.background,
          }
        }} name="(app)"/>
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen
          options={{
            contentStyle: {
              backgroundColor: MD3DarkTheme.colors.background,
            }
          }}
          name="auth"/>
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3DarkTheme} settings={{rippleEffectEnabled: true}}>
        <StatusBar style="light"/>
        <SessionProvider>
          <RootNavigator/>
        </SessionProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
