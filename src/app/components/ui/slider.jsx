import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

const Slider = ({ children }) => {
    console.log(children);
    return (
        <Carousel variant="dark">
            {React.Children.map(children, (child) => {
                return <Carousel.Item>{child}</Carousel.Item>;
            })}
        </Carousel>
    );
};

Slider.propTypes = {
    children: PropTypes.oneOfType(
        [PropTypes.arrayOf(PropTypes.node)],
        PropTypes.node
    )
};

export default Slider;
