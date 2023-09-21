import styled from 'styled-components';

export const LabelDescr = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 300px;

  color: ${props => props.theme.colors.black};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const Input = styled.input`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: 1px solid grey;
  outline: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};

  background-color: transparent;

  font-size: ${props => props.theme.fontSizes.s};
`;