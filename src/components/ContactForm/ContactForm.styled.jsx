import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: ${props => props.theme.colors.grey};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  text-shadow: 0 0.5px 0.5px 0.5px #fff;
  background-color: transparent;
  border: 1px solid grey;

  font-size: ${props => props.theme.fontSizes.s};
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  color: #f50a0a;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: ${p => p.theme.borders.none};
  outline: none;
  border-radius: 8px;

  background-color: ${p => p.theme.colors.muted};

  color: ${p => p.theme.colors.black};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    cursor: pointer;
    }
`;