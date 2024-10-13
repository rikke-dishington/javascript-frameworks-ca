import React, { useState } from 'react';
import styled from 'styled-components';
import { BlueButton } from '../components/Buttons.styles';

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = 'Full name must be at least 3 characters';
    if (formData.subject.length < 3) newErrors.subject = 'Subject must be at least 3 characters';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email must be valid';
    if (formData.body.length < 3) newErrors.body = 'Message must be at least 3 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      alert('Message sent successfully!');
      setFormData({ fullName: '', subject: '', email: '', body: '' });
    }
  };

  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="body">Message</Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
        </FormGroup>
        
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactWrapper>
  );
};

export default ContactPage;