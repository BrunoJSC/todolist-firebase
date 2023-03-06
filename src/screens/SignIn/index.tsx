import { useState } from "react";
import { Alert, ScrollView } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "src/@types/navigation";

import { Container, Loading, Title } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@utils/firebase";

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "signIn"
>;

interface SignInScreenProps {
  navigation: SignInScreenNavigationProp;
}

export function SignIn({ navigation }: SignInScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function handleScreenRegister() {
    navigation.navigate("signUp");
  }

  function handleLogin() {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        console.log(error);
      });
    navigation.navigate("home");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Title>Todo-list</Title>
        <Input
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <Input
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#fff"
        />

        {loading ? (
          <Loading animating size="large" />
        ) : (
          <Button variant="login" text="Login" onPress={handleLogin} />
        )}

        <Button
          variant="register"
          text="Register"
          onPress={handleScreenRegister}
        />
      </Container>
    </ScrollView>
  );
}
