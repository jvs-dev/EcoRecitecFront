import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  position: relative;
   &::before {
    content: '';
    display: flex;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #22c55e;
    left: -30px;
    top: -30px;
    z-index: 0;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
  line-height: 1.25;
  font-family: "Poppins", sans-serif;   
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: #22c55e;
    margin: 1rem auto 0 auto;
  }
  
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5);
    border-color: transparent;
  }
  transition: all 200ms ease-in-out;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  resize: vertical;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5);
    border-color: transparent;
  }
  transition: all 200ms ease-in-out;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(to right, #22c55e, #16a34a);
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 0px;
  outline-width: 0px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #16a34a, #15803d);
    transform: scale(1.02);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5), 0 0 0 4px rgba(34, 197, 94, 0.5);
  }
  transition: all 300ms ease-in-out;
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;