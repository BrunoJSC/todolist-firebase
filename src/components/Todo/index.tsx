import { Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";

interface TodoProps {
  todo: string;
  isCompleted: boolean;
}

export function Todo({ todo, isCompleted }: TodoProps) {
  return (
    <Container>
      <Text>{todo}</Text>
      <TouchableOpacity>{isCompleted}</TouchableOpacity>
    </Container>
  );
}
