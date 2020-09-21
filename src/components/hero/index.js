import React from "react";
import {Container, FormContainer} from "./styles/hero";


export default function Hero({children, background, ...restProps}) {
    return <Container background={background} {...restProps}>{children}</Container>
}

Hero.Form = function HeroForm({children, ...restProps}) {
    return <FormContainer {...restProps}>{children}</FormContainer>
}