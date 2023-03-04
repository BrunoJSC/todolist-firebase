import { TextInputProps } from "react-native";
import { Container } from "./styles";

type InputProps = TextInputProps & {
  value: string;
  placeholder?: string;
};

export function Input({ value, placeholder, ...rest }: InputProps) {
  return <Container value={value} placeholder={placeholder} {...rest} />;
}
