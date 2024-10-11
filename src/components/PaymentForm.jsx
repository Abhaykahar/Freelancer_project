// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ addPayment }) => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('unpaid');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = { id: Date.now(), amount: parseFloat(amount), status }; 
    addPayment(newPayment);
    setAmount('');
    setStatus('unpaid'); 
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 border  mb-3 p-3">
        <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary d-block mx-auto mt-4">Add Payment</button>
    </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
