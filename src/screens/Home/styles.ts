import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.button};
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;

  height: 50px;
`;
