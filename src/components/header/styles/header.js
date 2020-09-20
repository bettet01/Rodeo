import styled from 'styled-components/macro'
import {Link} from "react-router-dom";


export const Container = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    white-space: pre-wrap;
    border-bottom: #222 solid 5px ;
    
    @media (max-width: 1050px) {
    flex-direction: column;
      align-items: center;
  }
`;

export const Logo = styled.img`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 110px;
`;

export const Title = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 100px;
  text-decoration: none;
  color: white;
  font-size: 46px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  line-height: 400%;
  color: white;
  font-size: 24px;
  text-decoration: none;
  padding-right: 20px;
  
    @media (max-width: 1050px) {
      margin-top: -20px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;