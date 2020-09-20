import React from 'react';
import jumboData from '../fixtures/about.json'
import Jumbotron from "../components/jumbotron";

function AboutContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                                <Jumbotron.Name>{item.name}</Jumbotron.Name>
                                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                <Jumbotron.Description>{item.description}</Jumbotron.Description>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt}/>
                        </Jumbotron.Pane>
                    </Jumbotron>
                )
            )}
        </Jumbotron.Container>
    );
}

export default AboutContainer;