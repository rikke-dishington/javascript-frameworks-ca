import styled from 'styled-components';
import { BlueButton } from '../../components/Button/Buttons.styles';

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-family: var(--font-primary);
  border: 1px solid;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled(BlueButton)``;

const ErrorMessage = styled.p`
  color: var(--color-dark-red);
  margin-top: 5px;
`;

export { ContactWrapper, Title, Form, FormGroup, Label, Input, TextArea, SubmitButton, ErrorMessage };