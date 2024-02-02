import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_500Medium, 
  Nunito_600SemiBold, 
  Nunito_700Bold 
} from '@expo-google-fonts/nunito';

import { theme } from './src/theme';
import Launch from './src/pages/Launch';
import Login from './src/pages/Login';

function MyLoading() {
  return (
    <View style={{"flex": 1, "alignItems": "center", "justifyContent": "center" }}>
      <ActivityIndicator size="large" color="#000001" />
    </View>
  )
}

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return <MyLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Launch /> */}
      <Login />
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
}
