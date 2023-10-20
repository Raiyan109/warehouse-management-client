import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import lottieJson from '../../static/drawkit grape-animation-2-LOOP (1).json'
import Layout from '../DashboardContainer/Layout/Layout';
const ManageItems = () => {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#lottie'),
            animationData: lottieJson,
            renderer: "svg", // "canvas", "html"
            loop: false, // boolean
            autoplay: true, // boolean
        })
    }, [])
    return (
        <div>

            <h1>Manage Items</h1>

        </div>
    );
};

export default ManageItems;