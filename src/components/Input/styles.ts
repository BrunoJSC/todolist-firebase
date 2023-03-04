import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 20px;
  padding: 0 16px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.COLORS.input};
  color: ${({ theme }) => theme.COLORS.white};
`;
