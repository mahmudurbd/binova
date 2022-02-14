import React from 'react';
import Branding from '../Branding/Branding';
import Features from '../Features/Features';
import Highlight from '../Highlight/Highlight';
import Partners from '../Partners/Partners';
import Policy from '../Policy/Policy';
import Shoes from '../Shoes/Shoes';
import Slide from '../Slide/Slide';
import './Home.css';
import Testimonial from './Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <Highlight></Highlight>
            <Shoes></Shoes>
            <Features></Features>
            <Policy></Policy>
            <Branding></Branding>
            <Testimonial></Testimonial>
            <Partners></Partners>
        </div>
    );
};

export default Home;