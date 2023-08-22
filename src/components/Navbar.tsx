import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../store';
import { CartIcon } from '../HeroIcons';

const Navbar = () => {
  const { amount } = useSelector((store: RootState) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Accounting</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
