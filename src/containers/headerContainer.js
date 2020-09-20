import React from "react";
import Header from "../components/header";


export default function HeaderContainer() {
    return (
        <Header>
            <Header.Logo src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Huer Rodeo Logo" />
            <Header.Title to={"/"}>Huer Rodeo</Header.Title>
            <Header.LinkContainer>
                <Header.Link to={'/about'}>About</Header.Link>
                <Header.Link to={'/gallery'}>Gallery</Header.Link>
                <Header.Link to={'/contact'}>Contact</Header.Link>
                <Header.Link to={'/events'}>Events</Header.Link>
            </Header.LinkContainer>
        </Header>
    )
}