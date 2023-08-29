import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]); //[cartItems, dispatch];

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
