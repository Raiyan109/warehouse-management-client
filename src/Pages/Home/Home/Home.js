import React from 'react';
import ManageInventoriesButton from '../../ManageInventoriesButton/ManageInventoriesButton';
import About from '../About';
import Banner from '../Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import Contact from '../Contact';
import DesignOwn from '../DesignOwn/DesignOwn';
import Items from '../Items/Items';
import homeStyle from './Home.module.css'
import ShopFeatures from '../ShopFeatures';
import ShopByCategory from '../ShopByCategory';
import Adventure from '../Adventure/Adventure';
import Brands from '../Brands';
import Header from '../../Shared/Header/Header';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About />
            <Items></Items>
            {/* <ManageInventoriesButton></ManageInventoriesButton> */}
            <ShopFeatures />
            <ShopByCategory />
            <Adventure />
            <Brands />
            <CallToAction></CallToAction>
            <DesignOwn></DesignOwn>
            <Contact />
        </div>
    );
};

export default Home;