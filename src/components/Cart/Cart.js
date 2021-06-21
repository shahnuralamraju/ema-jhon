import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = (total + product.price).toFixed(2);
        
    }

    let shipping = 0;
    if(total > 150){
        shipping = 0;
    }else if(total > 50){
        shipping = 4.99;
    }else if(total > 0 && total <50){
        shipping = 6.99;
    }
    let tax = 0;
    tax = (total * 0.05).toFixed(2);
    let grandTotal = 0;
    grandTotal = (Number(total) + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Ordered: {cart.length}</h3>
            
            <p>Product Price    :<span>$ {total}</span></p>
            <p>Shipping Cost:<span>$ {shipping}</span></p>
            <p>Tax(5%) + Vat    :<span>$ {tax}</span></p>
        
            <h4>Total Price: <span>$ {grandTotal}</span></h4>
            
        </div>
    );
};

export default Cart;