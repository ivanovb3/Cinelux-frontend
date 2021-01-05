import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default class CarouselPictures extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100 carouselImage"
                            src={process.env.PUBLIC_URL + '/pictures/cinelux.jpg'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Visit our cinema for an amazing experience</h3>
                            <p>st Academic Stefan Mladenov #3 Vidin, Bulgaria</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100 carouselImage"
                            src={process.env.PUBLIC_URL + '/pictures/corona-pic.jpg'}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Stay safe during the pandemic, always wear masks to protect others and yourself</h3>                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100 carouselImage"
                            src={process.env.PUBLIC_URL + '/pictures/vidin.jpg'}
                            alt="Third slide"
                        />
                    </Carousel.Item> */}
                </Carousel>
            </div>
        )
    }
}
