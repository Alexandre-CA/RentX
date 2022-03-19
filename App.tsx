
import { Home } from './src/screen/Home';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo'
import AppLoading from "expo-app-loading";
import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold
  })
  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }else{
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

