import React from "react";
import {Container} from "./styles/carousel";

export default function Carousel({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}