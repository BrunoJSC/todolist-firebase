import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "src/@types/navigation";

import { Home } from "@screens/Home";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

import { signOut } from "firebase/auth";
import { auth } from "@utils/firebase";

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AuthRoutes() {
  const theme = useTheme();

  return (
    <Navigator>
      <Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Screen name="home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
