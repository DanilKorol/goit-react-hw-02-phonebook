import styled from 'styled-components';

export const Icon = styled.span`
  color: rgb(66 10 226);
  margin-right: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 20px;

  :hover {
    color: red;
  }
`;
