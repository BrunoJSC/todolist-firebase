import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootParamList = {
  signIn: undefined;
  signUp: undefined;
  home: undefined;
};

// Tipando os paramentros da rota
export type SignInScreenRouteProp = RouteProp<RootParamList, "signIn">;
type SignUpScreenRouteProp = RouteProp<RootParamList, "signUp">;
type HomeScreenRouteProp = RouteProp<RootParamList, "home">;

// Tipando a navegação
type SignInScreenNavigationProp = NativeStackScreenProps<
  RootParamList,
  "signIn"
>;
type SignUpScreenNavigationProp = NativeStackScreenProps<
  RootParamList,
  "signUp"
>;
type HomeScreenNavigationProp = NativeStackScreenProps<RootParamList, "home">;

export type AuthStackProps = {
  SignIn: {
    navigation: SignInScreenNavigationProp;
    route: SignInScreenRouteProp;
  };

  SignUp: {
    navigation: SignUpScreenNavigationProp;
    route: SignUpScreenRouteProp;
  };
};

export type MainStackProps = {
  Home: {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
  };
};
