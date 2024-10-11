
import React from 'react';

const PaymentItem = ({ payment, markAsPaid, deletePayment }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        Amount: ${payment.amount} - Status: {payment.status}
      </span>
      <div>
        <button 
          className="btn btn-success btn-sm me-2" 
          onClick={() => markAsPaid(payment.id)} 
          disabled={payment.status === 'paid'}
        >
          Mark as Paid
        </button>
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => deletePayment(payment.id)} 
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default PaymentItem;
