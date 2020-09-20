import styled from 'styled-components/macro';

export const Container = styled.table`
  color: white;
  margin-top: 45px;
  width: 100%;
  border-bottom: #222 solid 5px;
`;

export const Row = styled.tr`
  width: 100%;
`;

export const Header = styled.th`
  font-size: 50px;
  
  @media (max-width: 1050px) {
    font-size: 24px;
  }
`;

export const Column = styled.td`
  font-size: 24px;
  padding: 0.8em 1.2em;
  margin-left: 50%;
  text-align: center;
  
    @media (max-width: 1050px) {
    font-size: 16px;
  }
`;

