import {View} from 'react-native';
import AuthForm from '@/features/auth/components/AuthForm';

export default function AuthScreen() {
  return (
    <View style={{ flex: 1 }}>
      <AuthForm />
    </View>
  );
}
