import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/ModalSlice';
import { clearCart } from '../features/cart/CartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>全て削除しますか？</h4>
        <div className="btn-container">
          <button
            className="btn confitm-btn"
            onClick={() => dispatch(closeModal(null))}
          >
            いやや
          </button>
          <button
            className="btn confitm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal(null));
            }}
          >
            ええで
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
