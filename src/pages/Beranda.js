import React from 'react';
import Helps from '../contact/Helps';
import Footers from '../contact/Footers';
import Contacts from '../contact/Us';
import Brands from '../brands/Brands';
import CardProduct from './../cardProduct';
import CategoryCard from '../category/CategoryCard';
import Carousels from '../offers/Carousels';



class Beranda extends React.Component {
    render() {
        return (
            <div className="apps">
                <Carousels style={{margintop: '20px'}}/>
                <CategoryCard/>
                <CardProduct/>
                <Brands/>
                <Helps/>
                <Footers/>
                <Contacts/>
                
            </div>
        );
    }
}

export default Beranda;