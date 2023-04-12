import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 200px;
`;

export const Btn = styled.button`
  max-width: 100px;
  padding: 5px;
  border: 1px solid #fff;
  background-color: #a69bd1;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  :hover {
    background-color: blue;
    color: white;
  }
`;
