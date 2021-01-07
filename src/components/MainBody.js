import React from 'react';
import b4 from '../images/b4.jpg'
import b5 from '../images/b5.jpg'
import b6 from '../images/b6.jpg'
import b7 from '../images/b7.jpg'

const MainBody = () => {

    const imageSlider = () => {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 mh-50 imgSlider"  src={b4} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 mh-100 imgSlider"  src={b5} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 mh-100 imgSlider"  src={b6} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 mh-100 imgSlider"  src={b7} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

    return ( 
        <div className="container mt-4">
                <div className="row">
                    <div className="col-6 imgSlider">
                        {imageSlider()}
                    </div>
                    <div className="col-6 imgSliderText" >
                        <h2 className="text-uppercase text-secondary">Same greatness </h2>
                        <h2 className="text-uppercase text-secondary">Different buns!</h2>
                        <h1 className="">'POTATO BUNS'</h1>
                        <h3>اتنا سافٹ کہ منہ میں گھل جاۓ</h3>
                        <p className="">Now serving all your favourite burgers in soft-n-fresh potato bun. The buns are specially selected to enhance the flavour of each bite whether you are eating FireHouse or BigBang, Doppler or Quadra. Each bite into softness will make you love us even more!</p>
                    </div>
                </div>
            </div>
     );
}
 
export default MainBody;