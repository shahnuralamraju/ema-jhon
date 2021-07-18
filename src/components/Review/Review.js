import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router-dom';
// import Giphy from '../../images/giphy.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [cart, setCart] = useState([]);
    // const [placedOrder, setPlacedOrder] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () => {
        history.push('/shipment')
    }




    const removeProduct = (productKey) => {
        // console.log('click',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }



    useEffect(() => {
        const savedProduct = getDatabaseCart();
        const productKeys = Object.keys(savedProduct);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedProduct[key];
            return product;

        })
        setCart(cartProducts);
        // console.log(cartProducts);

    }, [])
    let thankYou, greeting;
    // if (placedOrder) {
    //     thankYou = <img className='giphy' src={Giphy} alt="gifhy" />
    //     greeting = <h1>You Successfully Placed Your Order</h1>
    // }

    return (
        <div className='shop-container'>
            <div style={{ width: '5%' }}>

            </div>

            <div className="product-container">

                {
                    cart.map(pd => <ReviewItem
                        product={pd}
                        removeProduct={removeProduct}
                        key={pd.key}
                    ></ReviewItem>)
                }
                {
                    [thankYou, greeting]
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    
                        <button onClick={handleProceedCheckout}
                            className='main-button review'><FontAwesomeIcon icon={faCheckSquare}/><span></span> Checkout</button>
                    
                </Cart>
            </div>

        </div>
    );
};

export default Review;