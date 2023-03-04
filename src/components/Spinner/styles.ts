import styled from "styled-components/native";

export const Container = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.active
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`