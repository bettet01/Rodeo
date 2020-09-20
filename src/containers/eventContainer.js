import React from "react";
import Table from "../components/table";
import {eventHeaders, events} from "../fixtures/events";
import {Jumbotron} from "../components";

export default function EventContainer() {
    return (
        <>
            <Jumbotron>
                <Jumbotron.Pane>
                    <Jumbotron.Name>Check Out Upcoming Events!</Jumbotron.Name>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={process.env.PUBLIC_URL + '/images/logo.png'} alt='event page image'/>
                </Jumbotron.Pane>
            </Jumbotron>
            <Table>
                <tbody>
                <tr>
                    <Table.Header>{eventHeaders.date}</Table.Header>
                    <Table.Header>{eventHeaders.name}</Table.Header>
                    <Table.Header>{eventHeaders.location}</Table.Header>
                </tr>
                {events.sort((item) => item.date.date()).map((item) => (
                    <Table.Row key={item.id}>
                        <Table.Column>{item.date.format('MM/DD/YYYY')}</Table.Column>
                        <Table.Column>{item.name}</Table.Column>
                        <Table.Column>{item.location}</Table.Column>
                    </Table.Row>
                ))}
                </tbody>
            </Table>
        </>
    )
}