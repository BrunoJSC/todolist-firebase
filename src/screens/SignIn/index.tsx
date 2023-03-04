import { useState } from "react";
import { ScrollView } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "src/@types/navigation";

import { Container, Loading, Title } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebase";

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
    try {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          navigation.navigate("home");
          return user;
        }
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <Input
          value={password}
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
