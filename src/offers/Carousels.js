import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const items = [

    {
        src : require('../assetImage/carousel/bnr01.jpg'),
        caption: '',
        altText: 'Slide 1' 
    },
    {
        src : require('../assetImage/carousel/bnr02.jpg'),
        caption: '',
        altText: 'Slide 1' 
    },
    {
        src : require('../assetImage/carousel/bnr03.jpg'),
        caption: '',
        altText: 'Slide 3' 
    }

];

const Carousels =() => <UncontrolledCarousel items={items}/>;

export default Carousels;