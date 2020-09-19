import React from "react";
import {Column, Container, Header, Row} from "./styles/table";


export default function Table({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Table.Header = function TableHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Table.Row = function TableRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Table.Column = function TableColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}