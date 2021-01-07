import React from 'react';


const Card = (props) => {
    const { img, price } = props;
    return ( 
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={img} alt="Pizza" style={{ height: '180px' }} />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item" style={{ fontWeight: 'bold' }}>Price: {price}</li>
            </ul>
        </div>
    );
}
 
export default Card;