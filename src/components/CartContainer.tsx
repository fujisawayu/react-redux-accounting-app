import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CartItem from './CartItem';

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector(
    (state: RootState) => state.cart
  );
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>accounting</h2>
          <h4 className="empty-cart">何もないよ</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>accounting</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>{total}$</span>
          </h4>
        </div>
        <button className="btn clear-btn">delete</button>
      </footer>
    </section>
  );
};

export default CartContainer;
