import React from "react";
import AboutContainer from "./aboutContainer";
import HomeContainer from "./homeContainer"
import GalleryContainer from "./galleryContainer"
import ContactContainer from "./contactContainer"
import {Route} from "react-router-dom";
import EventContainer from "./eventContainer";


export default function AppContainer() {
    return (
        <>
            <Route exact path="/">
                <HomeContainer/>
            </Route>
            <Route path="/about">
                <AboutContainer/>
            </Route>
            <Route path="/gallery">
                <GalleryContainer/>
            </Route>
            <Route path="/contact">
                <ContactContainer/>
            </Route>
            <Route path="/events">
                <EventContainer/>
            </Route>
        </>
    )
}