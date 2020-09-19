import React from "react";
import Table from "../components/table";
import {eventHeaders, events} from "../fixtures/events";
import moment from "moment";

export default function EventContainer() {
    return (
        <Table>
            <Table.Row>
                <Table.Header>{eventHeaders.date}</Table.Header>
                <Table.Header>{eventHeaders.name}</Table.Header>
                <Table.Header>{eventHeaders.location}</Table.Header>
            </Table.Row>
            {events.sort((item) => item.date.date()).map((item) => (
                <Table.Row key={item.id}>
                    <Table.Column>{item.date.format('MM/DD/YYYY')}</Table.Column>
                    <Table.Column>{item.name}</Table.Column>
                    <Table.Column>{item.location}</Table.Column>
                </Table.Row>
            ))}
        </Table>
    )
}