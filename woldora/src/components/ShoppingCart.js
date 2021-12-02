import React from 'react'
import './ShoppingCart.css';

function ShoppingCart() {
    return (
      <section className="shoppingcart">
          <CartContents />
          <DeliveryInfo />
      </section>
    );
}

const CartContents = () => {
    return (
        <section className="cartcontents">
            <h1>Shopping Cart Contents</h1>
                <RemoveButton />
                <AddButton />
                <DeleteButton />
                <CheckoutButton />
                <h4>Total Price:</h4>
        </section>
    );
};

const CheckoutButton = () => {
    return (
        <button className="checkout">
            Checkout
        </button>
    );
};

const RemoveButton = () => {
    return (
        <button className="remove">
            -
        </button>
    );
};

const AddButton = () => {
    return (
        <button className="add">
            +
        </button>
    );
};

const DeleteButton = () => {
    return (
        <button className="delete">
            Trash
        </button>
    );
};

const DeliveryInfo = () => {
    return (
        <section className="deliveryinfo">
            <h1>Customer Delivery Information</h1>
            <CustomerName />
            <CustomerAddress />
            <CustomerPhone />
            <CustomerDelivery />
        </section>
    );
};

const CustomerName = () => {
    return (
        <input className="customername" type="text" placeholder="Enter name"></input>
    );
};

const CustomerAddress = () => {
    return (
        <input className="customeraddress" type="text" placeholder="Enter address"></input>
    );
};

const CustomerPhone = () => {
    return (
        <input className="customerphone" type="text" placeholder="Enter phonenumber"></input>
    );
};

const CustomerDelivery = () => {
    return (
        <input className="customerdelivery" type="text" placeholder="Enter delivery instructions"></input>
    );
};

export default ShoppingCart