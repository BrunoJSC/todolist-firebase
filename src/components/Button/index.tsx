import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  onPress?: () => void;
  variant: "login" | "register";
}

export function Button({ text, onPress, variant, ...rest }: ButtonProps) {
  return (
    <Container variant={variant} onPress={onPress} {...rest}>
      <Title variant={variant}>{text}</Title>
    </Container>
  )
}