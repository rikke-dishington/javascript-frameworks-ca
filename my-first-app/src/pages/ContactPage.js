import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (formData.fullName.length < 3) {
      formErrors.fullName = 'Full name must be at least 3 characters long.';
    }

    if (formData.subject.length < 3) {
      formErrors.subject = 'Subject must be at least 3 characters long.';
    }

    if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Email must be valid.';
    }

    if (formData.body.length < 3) {
      formErrors.body = 'Message body must be at least 3 characters long.';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form data submitted:', formData);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <FormWrapper>
      <h1>Contact Us</h1>
      {isSubmitted && <p>Form submitted successfully!</p>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <TextArea
          name="body"
          placeholder="Message"
          rows="5"
          value={formData.body}
          onChange={handleChange}
        />
        {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}

        <Button type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactPage;
