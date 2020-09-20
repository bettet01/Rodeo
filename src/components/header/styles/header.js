import styled from 'styled-components/macro'
import {Link} from "react-router-dom";


export const Container = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    white-space: pre-wrap;
    border-bottom: #222 solid 5px ;
`;

export const Logo = styled.img`
height: 100px;
width: 110px;
`;

export const Title = styled(Link)`
  line-height: 100px;
  text-decoration: none;
  color: white;
  font-size: 46px;
`;

export const StyledLink = styled(Link)`
  line-height: 400%;
  color: white;
  font-size: 24px;
  text-decoration: none;
  padding-right: 20px;
`;

export const LinkContainer = styled.div`
`;