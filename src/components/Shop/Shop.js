import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from "../Product/Product";

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    // console.log(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    } 

    return (
        <div className='shop-container'>
           <div style={{width:'20%'}}>

           </div>
           
            <div className="product-container">

                {
                    products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct} key={pd.key} ></Product>)
                }

            </div>
            <div className="cart-container">
                <h2 style={{textAlign:'center', fontWeight:'bolder'}}>Order Summary</h2>
                <h3 style={{textAlign:'center'}}>Order Summary: {cart.length}</h3>
            </div>

        </div>
    );
};

export default Shop;