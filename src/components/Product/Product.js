import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <h4 className='product-name'>{name}</h4>
                <p>by:{seller}</p>
                <h4>$ {price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='main-button'><span><FontAwesomeIcon icon={faShoppingCart} /></span>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;