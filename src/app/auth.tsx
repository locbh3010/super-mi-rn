import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AppBar from '@/components/ui/AppBar';
import { useSession } from '@/hooks/useAuth';

type Mode = 'login' | 'register';

export default function AuthScreen() {
  const { signIn } = useSession();
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const isRegister = mode === 'register';

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ padding: 24, gap: 16, flexGrow: 1, justifyContent: 'center' }}>
        <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
          {isRegister ? 'Create account' : 'Sign in'}
        </Text>

        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          left={<TextInput.Icon icon="email" />}
        />

        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />

        {isRegister && (
          <TextInput
            mode="outlined"
            label="Confirm password"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
            left={<TextInput.Icon icon="lock-check" />}
          />
        )}

        <Button mode="contained" onPress={signIn} style={{ marginTop: 8 }}>
          {isRegister ? 'Sign Up' : 'Sign In'}
        </Button>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 8 }}>
          <Divider style={{ flex: 1 }} />
          <Text variant="bodySmall">OR</Text>
          <Divider style={{ flex: 1 }} />
        </View>

        <Button mode="outlined" icon="google" onPress={signIn}>
          Continue with Google
        </Button>

        <Button
          mode="text"
          onPress={() => setMode(isRegister ? 'login' : 'register')}
          style={{ marginTop: 8 }}>
          {isRegister ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </Button>
      </ScrollView>
    </View>
  );
}
