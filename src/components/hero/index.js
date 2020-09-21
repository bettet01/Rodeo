import React from "react";
import {Container, Form, Text} from "./styles/hero";


export default function Hero({children, background, ...restProps}) {
    return <Container background={background} {...restProps}>{children}</Container>
}

Hero.Form = function HeroForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}


Hero.Text = function HeroText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}