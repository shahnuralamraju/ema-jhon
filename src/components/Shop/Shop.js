import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const products = first10
    // const [products, setProducts] = useState(first10)
    // console.log(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        // console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    } 

    return (
        <div className='shop-container'>
           <div style={{width:'5%'}}>

           </div>
           
            <div className="product-container">

                {
                    products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct} key={pd.key} ></Product>)
                }

            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;