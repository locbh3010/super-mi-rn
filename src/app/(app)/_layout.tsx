import {Stack} from 'expo-router';
import {withTheme} from "react-native-paper";
import {ThemeProp} from "react-native-paper/src/types";

type Props = {
  theme: ThemeProp
}

function AppLayout({theme}: Props) {
  return <Stack screenOptions={{
    headerShown: false, contentStyle: {
      backgroundColor: theme.colors?.background
    }
  }}/>;
}

export default withTheme(AppLayout)
