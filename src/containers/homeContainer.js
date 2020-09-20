import React from "react";
import {FaqsContainer} from "./faqsContainer";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Carousel from "../components/carousel";
import {Jumbotron} from "../components";
import {StyledLink} from "../components/form/styles/form";

const images = [
    {
        original: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67331226_1054242151632594_4903385748901724160_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=7-KRLZ6ISzUAX97JQ7B&_nc_ht=scontent.ffcm1-2.fna&oh=571521418194c365599941b14c9540bc&oe=5F8C536D',
        thumbnail: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67331226_1054242151632594_4903385748901724160_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=7-KRLZ6ISzUAX97JQ7B&_nc_ht=scontent.ffcm1-2.fna&oh=571521418194c365599941b14c9540bc&oe=5F8C536D',
    },
    {
        original: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67221264_1054242141632595_9051914391187881984_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=Xfmq0XdZDO8AX9KvNhN&_nc_ht=scontent.ffcm1-2.fna&oh=e1e9a3c14263a0bdc2a5e7249e6ec93b&oe=5F8BE877',
        thumbnail: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67221264_1054242141632595_9051914391187881984_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=Xfmq0XdZDO8AX9KvNhN&_nc_ht=scontent.ffcm1-2.fna&oh=e1e9a3c14263a0bdc2a5e7249e6ec93b&oe=5F8BE877',
    },
    {
        original: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67217179_1054242051632604_8699696883590758400_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=3seRGRa-WJ0AX8FX9sd&_nc_ht=scontent.ffcm1-2.fna&oh=37630d1e74bf16f12dc6e5e431737738&oe=5F8C81A2',
        thumbnail: 'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/67217179_1054242051632604_8699696883590758400_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=3seRGRa-WJ0AX8FX9sd&_nc_ht=scontent.ffcm1-2.fna&oh=37630d1e74bf16f12dc6e5e431737738&oe=5F8C81A2',
    },
    {
        original: 'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/66956165_1051363861920423_5841246223679356928_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=jBGXZao8jgIAX8xjYC0&_nc_ht=scontent.ffcm1-1.fna&oh=6866e0d376ecabf2ba81f5b314dae574&oe=5F8D7749',
        thumbnail: 'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/66956165_1051363861920423_5841246223679356928_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=jBGXZao8jgIAX8xjYC0&_nc_ht=scontent.ffcm1-1.fna&oh=6866e0d376ecabf2ba81f5b314dae574&oe=5F8D7749',
    },
    {
        original: 'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/67204196_1051363728587103_1307119244374179840_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=OWQeMXvzm8oAX8xPedu&_nc_ht=scontent.ffcm1-1.fna&oh=206b5bb5a223e90e1c606c3bf4e78874&oe=5F8CB68A',
        thumbnail: 'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/67204196_1051363728587103_1307119244374179840_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=OWQeMXvzm8oAX8xPedu&_nc_ht=scontent.ffcm1-1.fna&oh=206b5bb5a223e90e1c606c3bf4e78874&oe=5F8CB68A',
    },
];

export default function HomeContainer() {
    return (
        <>
            <Carousel>
                <ImageGallery
                    infinite={true}
                    lazyLoad={true}
                    autoPlay={true}
                    items={images}
                />
            </Carousel>
            <Jumbotron style={{borderTop: '#222 solid 5px'}}>
                <Jumbotron.Pane>
                    <Jumbotron.Name>Check us out on facebook!</Jumbotron.Name>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <a href="https://www.facebook.com/heuerrodeocollc"><Jumbotron.Image style={{ marginTop: '30px', marginLeft: '50px',  width: '30%'}} src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-19.png' alt='facebook link'/></a>
                </Jumbotron.Pane>
            </Jumbotron>
            <Jumbotron>
                <Jumbotron.Pane style={{color: 'white', border: 'white solid 5px'}}>
                    <Jumbotron.EventFlag>Mason City Fair</Jumbotron.EventFlag>
                    <br/>
                    <div style={{textAlign: 'center', fontSize: '20px'}}>on</div>
                    <br/>
                    <Jumbotron.EventFlag>1/1/2021</Jumbotron.EventFlag>
                </Jumbotron.Pane>
                    <Jumbotron.HomeFlag style={{width: '100%'}}>Catch us at our next event!</Jumbotron.HomeFlag>
                <Jumbotron.Pane>

                </Jumbotron.Pane>
            </Jumbotron>
            <FaqsContainer/>
        </>
    )
}