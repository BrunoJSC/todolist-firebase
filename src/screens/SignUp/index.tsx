import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "src/@types/navigation";

import { useState } from "react";

import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@utils/firebase";
import { getDoc, setDoc, doc, addDoc, collection } from "firebase/firestore";

import { Container, Loading, Title } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Alert } from "react-native";
import { Spinner } from "@components/Spinner";

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "signUp"
>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

interface UserProps {
  user: User;
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
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log("User account created & signed in!");
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
