import styled from 'styled-components';

const BaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-decoration: none;
`;

export const BlueButton = styled(BaseButton)`
  background-color: var(--color-light-blue);
  color: var(--color-dark-blue);
  border: 1px solid var(--color-dark-blue);

  &:hover {
    background-color: var(--color-darker-blue);
    color: var(--color-darker-blue);
  }

  &:active {
    background-color: var(--color-darker-blue);
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: var(--color-light-red);
  color: var(--color-dark-red);
  border: 1px solid var(--color-dark-red);

  &:hover {
    background-color: var(--color-darker-red);
    color: var(--color-darker-red);
  }

  &:active {
    background-color: var(--color-darker-red);
  }
`;