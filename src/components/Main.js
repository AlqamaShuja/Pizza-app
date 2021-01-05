import React from 'react';
import Header from './header';
import './style.css';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-8 main-heading">
                        <h1>PIZZA CORNER</h1>
                        <p className="main-p-highlight">HOME OF THE WHOPPER</p>
                        <p className="about-pizza">Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.</p>
                    </div>
                    <div className="col-4">
                        <div className="main-div">
                            <div className="main_header">
                                <Header />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="main">
        //     <div className="main-heading">
        //         <h1>PIZZA CORNER</h1>
        //         <p>HOME OF THE WHOPPER</p>
        //     </div>
            // <div className="main-div">
            //     <div className="main_header">
            //         <Header />
            //     </div>
            // </div>
        // </div>
     );
}
 
export default Main;