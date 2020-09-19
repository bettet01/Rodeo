import React from "react";
import {Container, Title, Logo, StyledLink, LinkContainer} from './styles/header'

export default function Header({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    );
}

Header.Logo = function HeaderLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}

Header.LinkContainer = function HeaderLinkContainer({children, ...restProps}) {
    return <LinkContainer {...restProps}>{children}</LinkContainer>
}

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Header.Link = function HeaderLink({children, ...restProps}) {
    return <StyledLink {...restProps}>{children}</StyledLink>
}