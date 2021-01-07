import React from 'react';
import Card from './Card';
import img1 from '../images/b1.jpg';
import img2 from '../images/b2.jpg';
import img3 from '../images/b6.jpg';
import './style.css';
import useWebAnimations, { zoomInLeft, zoomInRight, zoomInUp} from "@wellyshen/use-web-animations";

const PizzaTypes = () => {
    const { ref, playState } = useWebAnimations({ ...zoomInLeft, timing: { duration: 1000, iterations: 1} });
    return (
        <div className="main-pizza-type">
            <h1 style={{ textAlign: 'center' }}>Corner's Exclusive Burgers</h1>
            <div className="row main-pizza-type">
                <div className="col-4" ref={ref}>
                    <Card img={img1} price="RS 250" />
                </div>
                <div className="col-4">
                    <Card img={img2} price="RS 350" />
                </div>
                <div className="col-4">
                    <Card img={img3} price="RS 300" />
                </div>
            </div>
        </div>
     );
}
 
export default PizzaTypes;