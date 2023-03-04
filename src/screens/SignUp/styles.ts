import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.large}px;
    color: ${theme.COLORS.white};
  `}
  margin-bottom: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.white,
}))``