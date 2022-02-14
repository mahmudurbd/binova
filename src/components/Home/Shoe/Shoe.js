import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const Shoe = (props) => {
    const {_id,productName,image,rating,price} = props.shoe;
    

    return (
        <div class="col">
          <div class="card h-100">
          <img src={image} class="card-img-top img-fluid" alt="Hollywood Sign on The Hill"/>
          <div class="card-body">
            <div className='d-flex justify-content-between shoes-text'>
                <span class="card-title">{productName}</span>
                <div class="d-flex ms-2 mt-1">
                <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star text-warning"
                    initialRating={rating}
                    readonly
                />
                </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className='price mt-1'>${price}.00</p>
              <Link className='shoe-btn' to={`/booking/${_id}`}>Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Shoe;