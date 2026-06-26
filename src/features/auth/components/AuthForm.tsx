import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Controller, useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, Button, Divider, HelperText, Surface, Text, TextInput } from 'react-native-paper';
import {
  loginSchema,
  registerSchema,
  type RegisterValues,
} from '@/features/auth/schemas/auth.schema';
import { useAuthStore } from '@/features/auth/store/authStore';
import GoogleButton from '@/features/auth/components/GoogleButton';
import { useAppTheme } from '@/theme';

type Mode = 'login' | 'register';

export default function AuthForm() {
  const theme = useAppTheme();
  const signIn = useAuthStore(s => s.signIn);
  const [mode, setMode] = useState<Mode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          padding: theme.spacing.lg,
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <Surface
          elevation={4}
          style={{
            padding: theme.spacing.lg,
            borderRadius: theme.radii.cardLarge,
            backgroundColor: theme.colors.glassBackground,
            borderWidth: 1,
            borderColor: theme.colors.glassBorder,
            ...theme.shadows.card,
            gap: 12,
          }}>
          {/* Header section with modern expressive emblem */}
          <View
            style={{
              alignItems: 'center',
              marginBottom: theme.spacing.sm,
              marginTop: theme.spacing.xs,
            }}>
            <Avatar.Icon
              size={64}
              icon={isRegister ? 'account-plus-outline' : 'shield-key-outline'}
              color={theme.colors.primary}
              style={{
                backgroundColor: 'rgba(255, 202, 40, 0.12)',
                borderWidth: 1.5,
                borderColor: 'rgba(255, 202, 40, 0.25)',
                marginBottom: theme.spacing.md,
              }}
            />
            <Text
              variant="headlineMedium"
              style={{ color: theme.colors.onSurface, fontWeight: '800', textAlign: 'center' }}>
              {isRegister ? 'Create account' : 'Welcome back'}
            </Text>
            <Text
              variant="bodyMedium"
              style={{
                color: theme.colors.onSurfaceVariant,
                textAlign: 'center',
                marginTop: 4,
              }}>
              {isRegister ? 'Sign up to get started' : 'Sign in to continue'}
            </Text>
          </View>

          {/* Email input field */}
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <View style={{ marginBottom: errors.email ? 2 : 8 }}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  error={!!errors.email}
                  textColor={theme.colors.onSurface}
                  placeholderTextColor={theme.colors.onSurfaceVariant}
                  style={{
                    height: theme.sizes.inputHeight,
                    backgroundColor: theme.colors.inputBackground,
                  }}
                  outlineColor={theme.colors.inputBorder}
                  activeOutlineColor={theme.colors.primary}
                  outlineStyle={{
                    borderRadius: theme.radii.input,
                    borderWidth: 1,
                  }}
                  left={
                    <TextInput.Icon
                      icon="email-outline"
                      color={errors.email ? theme.colors.error : 'rgba(255, 255, 255, 0.5)'}
                    />
                  }
                />
                {errors.email && (
                  <HelperText
                    type="error"
                    visible={true}
                    style={{ paddingHorizontal: 4, marginTop: 2 }}>
                    {errors.email.message}
                  </HelperText>
                )}
              </View>
            )}
          />

          {/* Password input field */}
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <View style={{ marginBottom: errors.password ? 2 : 8 }}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry={!showPassword}
                  error={!!errors.password}
                  textColor={theme.colors.onSurface}
                  placeholderTextColor={theme.colors.onSurfaceVariant}
                  style={{
                    height: theme.sizes.inputHeight,
                    backgroundColor: theme.colors.inputBackground,
                  }}
                  outlineColor={theme.colors.inputBorder}
                  activeOutlineColor={theme.colors.primary}
                  outlineStyle={{
                    borderRadius: theme.radii.input,
                    borderWidth: 1,
                  }}
                  left={
                    <TextInput.Icon
                      icon="lock-outline"
                      color={errors.password ? theme.colors.error : 'rgba(255, 255, 255, 0.5)'}
                    />
                  }
                  right={
                    <TextInput.Icon
                      icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      color="rgba(255, 255, 255, 0.5)"
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
                {errors.password && (
                  <HelperText
                    type="error"
                    visible={true}
                    style={{ paddingHorizontal: 4, marginTop: 2 }}>
                    {errors.password.message}
                  </HelperText>
                )}
              </View>
            )}
          />

          {/* Confirm Password input field (Register only) */}
          {isRegister && (
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { value, onChange, onBlur } }) => (
                <View style={{ marginBottom: errors.confirmPassword ? 2 : 8 }}>
                  <TextInput
                    mode="outlined"
                    label="Confirm password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry={!showConfirmPassword}
                    error={!!errors.confirmPassword}
                    textColor={theme.colors.onSurface}
                    placeholderTextColor={theme.colors.onSurfaceVariant}
                    style={{
                      height: theme.sizes.inputHeight,
                      backgroundColor: theme.colors.inputBackground,
                    }}
                    outlineColor={theme.colors.inputBorder}
                    activeOutlineColor={theme.colors.primary}
                    outlineStyle={{
                      borderRadius: theme.radii.input,
                      borderWidth: 1,
                    }}
                    left={
                      <TextInput.Icon
                        icon="lock-check-outline"
                        color={
                          errors.confirmPassword ? theme.colors.error : 'rgba(255, 255, 255, 0.5)'
                        }
                      />
                    }
                    right={
                      <TextInput.Icon
                        icon={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                        color="rgba(255, 255, 255, 0.5)"
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    }
                  />
                  {errors.confirmPassword && (
                    <HelperText
                      type="error"
                      visible={true}
                      style={{ paddingHorizontal: 4, marginTop: 2 }}>
                      {errors.confirmPassword.message}
                    </HelperText>
                  )}
                </View>
              )}
            />
          )}

          {/* Primary Submit Button */}
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            contentStyle={{ height: theme.sizes.buttonHeight }}
            labelStyle={{
              fontSize: 16,
              fontWeight: '700',
              letterSpacing: 0.5,
              color: theme.colors.onPrimary,
            }}
            style={{
              marginTop: theme.spacing.xs,
              borderRadius: theme.radii.input,
              backgroundColor: theme.colors.primary,
              ...theme.shadows.primaryButton,
            }}>
            {isRegister ? 'Sign Up' : 'Sign In'}
          </Button>

          {/* Divider */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: theme.spacing.md,
              marginVertical: theme.spacing.xs,
            }}>
            <Divider style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <Text
              variant="bodySmall"
              style={{
                color: theme.colors.onSurfaceVariant,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              OR
            </Text>
            <Divider style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          </View>

          {/* Google Button */}
          <GoogleButton />

          {/* Toggle mode Button */}
          <Button
            mode="text"
            onPress={toggleMode}
            labelStyle={{ fontSize: 14, fontWeight: '600', color: theme.colors.primary }}
            style={{ marginTop: theme.spacing.xs }}>
            {isRegister ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </Button>
        </Surface>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
