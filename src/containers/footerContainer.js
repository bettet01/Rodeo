import React from "react";
import { Footer } from '../components';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Purchase Tickets</Footer.Link>
                    <Footer.Link href="#">Legal Shenanigans</Footer.Link>
                    <Footer.Link href="#">Contact Page Creator</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>&#169; 2020 Heuer Rodeo LLC</Footer.Text>
        </Footer>
    )
}