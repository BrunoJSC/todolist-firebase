import { useTheme } from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { RootParamList } from "src/@types/navigation";

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AuthRoutes() {
  const theme = useTheme();
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
      <Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
      <Screen name="home" component={Home} options={{ headerLeft:() => false, headerStyle: { backgroundColor: theme.COLORS.background } }} />
    </Navigator>
  );
}
