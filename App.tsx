import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { Routes } from "@routes/index";
import { Spinner } from "@components/Spinner";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Spinner />}
      </ThemeProvider>
    </>
  );
}
