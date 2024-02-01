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

function MyLoading() {
  return (
    <View style={{"flex": 1, "alignItems": "center", "justifyContent": "center" }}>
      <ActivityIndicator size="large" color="#7C3AED" />
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
      <Launch />
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
}
