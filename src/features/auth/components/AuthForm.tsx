import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Controller, useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Divider, HelperText, Text, TextInput } from 'react-native-paper';
import {
  loginSchema,
  registerSchema,
  type RegisterValues,
} from '@/features/auth/schemas/auth.schema';
import { useAuthStore } from '@/features/auth/store/authStore';
import GoogleButton from '@/features/auth/components/GoogleButton';

type Mode = 'login' | 'register';

export default function AuthForm() {
  const signIn = useAuthStore(s => s.signIn);
  const [mode, setMode] = useState<Mode>('login');
  const isRegister = mode === 'register';

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(
      isRegister ? registerSchema : loginSchema,
    ) as unknown as Resolver<RegisterValues>,
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = () => signIn();

  const toggleMode = () => {
    setMode(isRegister ? 'login' : 'register');
    reset();
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 24, gap: 8, flexGrow: 1, justifyContent: 'center' }}>
      <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
        {isRegister ? 'Create account' : 'Sign in'}
      </Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange, onBlur } }) => (
          <View>
            <TextInput
              mode="outlined"
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              keyboardType="email-address"
              error={!!errors.email}
              left={<TextInput.Icon icon="email" />}
            />
            <HelperText type="error" visible={!!errors.email}>
              {errors.email?.message}
            </HelperText>
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange, onBlur } }) => (
          <View>
            <TextInput
              mode="outlined"
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              error={!!errors.password}
              left={<TextInput.Icon icon="lock" />}
            />
            <HelperText type="error" visible={!!errors.password}>
              {errors.password?.message}
            </HelperText>
          </View>
        )}
      />

      {isRegister && (
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { value, onChange, onBlur } }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Confirm password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                error={!!errors.confirmPassword}
                left={<TextInput.Icon icon="lock-check" />}
              />
              <HelperText type="error" visible={!!errors.confirmPassword}>
                {errors.confirmPassword?.message}
              </HelperText>
            </View>
          )}
        />
      )}

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ marginTop: 4 }}>
        {isRegister ? 'Sign Up' : 'Sign In'}
      </Button>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 8 }}>
        <Divider style={{ flex: 1 }} />
        <Text variant="bodySmall">OR</Text>
        <Divider style={{ flex: 1 }} />
      </View>

      <GoogleButton />

      <Button mode="text" onPress={toggleMode} style={{ marginTop: 8 }}>
        {isRegister ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
      </Button>
    </ScrollView>
  );
}
