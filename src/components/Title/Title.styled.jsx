import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.l};
`;