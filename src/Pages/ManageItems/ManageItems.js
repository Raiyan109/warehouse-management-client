import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import lottieJson from '../../static/drawkit grape-animation-2-LOOP (1).json'
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
            <h1>manage items </h1>
            <div id='lottie' style={{ width: 200, height: 200 }}></div>
        </div>
    );
};

export default ManageItems;