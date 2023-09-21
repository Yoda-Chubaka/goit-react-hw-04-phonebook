import styled from 'styled-components';

export const ButtonStyle = styled.button`
padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;
  border-radius: 8px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.muted};

  &:hover,
  &:focus {
    cursor: pointer;
    color: white;
  }
`;