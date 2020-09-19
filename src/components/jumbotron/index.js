import React from "react";
import {Container, Item,  Description, Image, Inner, Name, Pane, Title} from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row', ...restProps}) {
    return (
        <Item>
            <Inner direction={direction} {...restProps}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Name = function JumbotronName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Jumbotron.Description = function JumbotronDescription({children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>
}

Jumbotron.Image = function JumbotronImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}