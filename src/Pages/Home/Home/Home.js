import React from 'react';
import Banner from '../Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import DesignOwn from '../DesignOwn/DesignOwn';
import Items from '../Items/Items';
import homeStyle from './Home.module.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <CallToAction></CallToAction>
            <DesignOwn></DesignOwn>
        </div>
    );
};

export default Home;