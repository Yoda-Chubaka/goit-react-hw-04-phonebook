import styled from 'styled-components';

export const ContactItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${p => p.theme.colors.text};
  text-shadow: 0.5px 0.5px 0.5px #fff;
  font-size: ${props => props.theme.fontSizes.s};
`;