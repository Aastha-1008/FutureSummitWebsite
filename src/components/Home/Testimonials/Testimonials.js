import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { TestimonialsData } from "./TestimonialsData";
import './Testimonials.scss';

const Testimonials = () => {
    return (<div className="testimonials_data" >
        {TestimonialsData.map(({ review, name }, index) => (
            <div className="data_content_testimonial" key={index} >
                <div className="testimonials_star" >
                    <FontAwesomeIcon icon={faStar} className="start" style={{ 'color': 'rgb(255, 217, 0)', 'paddingRight': '.5rem' }} />
                    <FontAwesomeIcon icon={faStar} className="start" style={{ 'color': 'rgb(255, 217, 0)', 'paddingRight': '.5rem' }} />
                    <FontAwesomeIcon icon={faStar} className="start" style={{ 'color': 'rgb(255, 217, 0)', 'paddingRight': '.5rem' }} />
                    <FontAwesomeIcon icon={faStar} className="start" style={{ 'color': 'rgb(255, 217, 0)', 'paddingRight': '.5rem' }} />
                    <FontAwesomeIcon icon={faStar} className="start" style={{ 'color': 'rgb(255, 217, 0)', 'paddingRight': '.5rem' }} />
                </div>
                <div className="testimonals_reviews">
                    <p>{review}</p>
                </div>
                <div className="Testimonials_name">
                    <p className="name"><b>{name}</b></p>
                    <p className="quotes"><FontAwesomeIcon icon={faQuoteRight} style={{ 'width': '4rem', 'height': '4rem' }} /></p>
                </div>
            </div>
        ))}</div>
    );
};

export default Testimonials;