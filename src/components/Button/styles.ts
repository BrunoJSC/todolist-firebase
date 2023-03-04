import styled, { css } from "styled-components/native";

interface Props {
  variant: "login" | "register"
}

export const Container = styled.TouchableOpacity<Props>`
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme, variant }) => variant === "login" ? theme.COLORS.button : theme.COLORS.white};
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
`

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.small}px;
    color: ${variant === "login" ?theme.COLORS.white : theme.COLORS.background};
  `}
`