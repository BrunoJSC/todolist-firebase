import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "src/@types/navigation";

import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebase";

import { Container, Loading, Title } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Alert } from "react-native";
import { Spinner } from "@components/Spinner";

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "signUp"
>;

interface SignUpScreenProps {
  navigation: SignInScreenNavigationProp;
}

export function SignUp({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function handleGoToHome() {
    navigation.goBack();
  }

  function handleCreateUser() {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Error");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });

    navigation.navigate("home");
  }

  return (
    <Container>
      <Title>Registrar</Title>
      <Input
        placeholder="Email"
        placeholderTextColor="#ffffff"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#ffffff"
        value={password}
        onChangeText={setPassword}
      />

      <Input
        placeholder="Confirme o password"
        placeholderTextColor="#ffffff"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {loading ? (
        <Loading animating size="large" />
      ) : (
        <Button text="Registrar" variant="login" onPress={handleCreateUser} />
      )}
      <Button text="Voltar" variant="register" onPress={handleGoToHome} />
    </Container>
  );
}
