import { Surface, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useAppTheme } from '@/theme';

type Props = {
  title: string;
};

export default function AppBar({ title }: Props) {
  const theme = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <Surface
      elevation={2}
      style={{
        backgroundColor: theme.colors.elevation.level2,
        paddingTop: insets.top + 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}>
        <Text variant="titleLarge" style={{ color: theme.colors.onSurface, fontWeight: '700' }}>
          {title}
        </Text>
      </View>
    </Surface>
  );
}
