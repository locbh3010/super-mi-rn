import { MD3Theme, Surface, Text, withTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated } from 'react-native';
import View = Animated.View;

type Props = {
  theme: MD3Theme;
  title: string;
};

function AppBar({ theme, title }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Surface
      elevation={1}
      style={[{ backgroundColor: theme.colors.elevation.level2 }, { paddingTop: insets.top + 2 }]}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: theme.colors.elevation.level2,
          paddingInline: 12,
          paddingBlock: 14,
        }}>
        <Text variant="titleMedium">{title}</Text>
      </View>
    </Surface>
  );
}

export default withTheme(AppBar);
