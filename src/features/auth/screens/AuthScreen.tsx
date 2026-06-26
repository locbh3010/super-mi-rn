import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AuthForm from '@/features/auth/components/AuthForm';
import { useAppTheme } from '@/theme';

export default function AuthScreen() {
  const theme = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#1A160F', '#0F0F10', '#150E12']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      {/* Dynamic colorful blobs for MD3 Expressive look */}
      <LinearGradient
        colors={['rgba(255, 202, 40, 0.18)', 'rgba(255, 202, 40, 0)']}
        style={styles.glowTopRight}
      />
      <LinearGradient
        colors={['rgba(240, 98, 146, 0.12)', 'rgba(240, 98, 146, 0)']}
        style={styles.glowBottomLeft}
      />

      <AuthForm />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  glowTopRight: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
  },
  glowBottomLeft: {
    position: 'absolute',
    bottom: -80,
    left: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
  },
});
