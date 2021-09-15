import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImgsCard = (props) => {
    const { img1, img2, alt } = props;
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt={alt}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt={alt}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export { ImgsCard }