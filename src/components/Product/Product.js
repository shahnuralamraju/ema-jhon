import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    
    return (
        <div className='product'>
            <div className="picture">
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <h6 className='product-name'><Link to={"/product/"+key}>{name}</Link></h6>
                <p>by:{seller}</p>
                <h6 style={{color:'red',fontWeight:'bolder'}}>$ {price}</h6>
                <p>only {stock} left in stock - order soon</p>
               {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className='main-button'><span><FontAwesomeIcon icon={faShoppingCart} /></span>Add to Cart</button>}
            </div>

        </div>
    );
};

export default Product;