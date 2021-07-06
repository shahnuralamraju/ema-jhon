import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { img, name, key, quantity, price, seller } = props.product;
  
    return (
        <div className='product'>
            <div className="picture">
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <h6 className='product-name'><Link to={"/product/" + key}>{name}</Link></h6>
                <p>by:{seller}</p>
                <h6 style={{ color: 'red', fontWeight: 'bolder' }}>$ {price}</h6>
                <p> Quantity: {quantity}
                   
                </p>
                <button onClick={() => props.removeProduct(key)}
                    className='main-button'>
                    <span><FontAwesomeIcon icon={faTrash} /></span>
                    Remove

                </button>
            </div>

        </div>
    );
};

export default ReviewItem;