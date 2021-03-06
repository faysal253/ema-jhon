import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.77
    }

    const tax = total / 10

    const formatNumber = num => {
        const pricision = num.toFixed(2);
        return Number(pricision)

    }
    const grandTotal = formatNumber((total + shipping + tax))
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Product-Total: {formatNumber(total)}</p>
            <p>Shipping Coast:{shipping}</p>
            <p>tax + vat: {formatNumber(tax)}</p>
            <hr />
            <h4>Order total:{grandTotal}</h4>
        </div>
    );
};

export default Cart;