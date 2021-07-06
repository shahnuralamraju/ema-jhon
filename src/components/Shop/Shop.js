import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const fakeDatas = fakeData.slice(0, 10);
        setProducts(fakeDatas);

        const savedProduct = getDatabaseCart();
        const productKeys = Object.keys(savedProduct);
        const previousCart = productKeys.map(existingkey =>{
            const product = fakeData.find(pd => pd.key === existingkey);
            product.quantity = savedProduct[existingkey];
            return product;
        })
        setCart(previousCart)
    }, [])

    const handleAddProduct = (product) =>{
        const sameProduct = cart.find(pd => pd.key === product.key)
        let count =1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)

    } 

    return (
        <div className='shop-container'>
           <div style={{width:'5%'}}>

           </div>
           
            <div className="product-container">

                {
                    products.map(pd => <Product
                        product={pd} 
                        showAddToCart ={true} 
                        handleAddProduct={handleAddProduct} 
                        key={pd.key} ></Product>)
                }

            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-button review'><FontAwesomeIcon icon={faRandom}/>
                            <span></span>Review Order</button>
                    </Link>
               </Cart>
            </div>

        </div>
    );
};

export default Shop;