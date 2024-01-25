import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Payments = () => {
  return (
    <div>
    <Navbar />
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h4 className="text-2xl font-semibold mb-4">
          <span>Add payment</span>
          <a href="/payment/charges" className="ml-4 text-blue-500">Topups history</a>
          <a href="/payment" className="ml-4 text-blue-500">Expenses history</a>
        </h4>
        <div className="alert alert-primary bg-blue-100 text-blue-700">
          <h5 className="font-semibold">Your account is not active!</h5>
          To activate your account, please top-up your account for <b>$50</b>. This amount will be added to your account balance, and you can use it to buy proxies.
        </div>
        <h5 className="mt-4 text-xl">Your Bitcoin top-up address</h5>
        <div className="alert alert-success bg-green-100 text-green-700">
          17RYfyK7cmRYPyCd73wuB3yRykX9BWHae9 <i className="bi bi-arrow-left ml-2 cursor-pointer"></i>
        </div>
        <h5 className="mt-4 text-xl">Your Litecoin top-up address</h5>
        <div className="alert alert-success bg-green-100 text-green-700">
          ltc1qtg4vny9ypdwm5nycmgqp0xx55m7fgqrfe8hpn8 <i className="bi bi-arrow-left ml-2 cursor-pointer"></i>
        </div>
        <div className="alert alert-danger alert-dismissible bg-red-100 text-red-700 mt-4">
          <h5 className="font-semibold">Do not share your BTC/LTC addresses with anyone!</h5>
          Don&apos;t send a screenshot of this page to anyone! Otherwise, you might lose your account!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h5 className="mt-4 text-xl">Top-up Calculator</h5>
        <p className="mb-4"><b>Course: 1 BTC = $<span className="btc_cource">...</span><input type="hidden" className="btc_cource_in" />1 LTC = $<span className="ltc_cource">...</span>
          <input type="hidden" className="ltc_cource_in"/></b>
        </p>
        <div className="flex flex-col lg:flex-row mb-4">
          <div className="lg:w-1/3">
            <div className="input-group">
              <div className="input-group-text">$</div>
              <input type="text" className="form-control usd_value" placeholder="USD Value" value="55" />
            </div>
            <div className="mt-2 mb-2">Payment amount</div>
          </div>
          <div className="lg:w-1/3 mt-2 lg:mt-0">
            <div className="input-group">
              <div className="input-group-text">in BTC</div>
              <input type="text" className="form-control btc_value" placeholder="BTC Value" />
            </div>
            <a href="bitcoin:17RYfyK7cmRYPyCd73wuB3yRykX9BWHae9?amount=0.001" className="payment_link_btc btn btn-primary btn-block mt-2 lg:mb-0">Pay with BTC</a>
          </div>
          <div className="lg:w-1/3 mt-2 lg:mt-0">
            <div className="input-group">
              <div className="input-group-text">in LTC</div>
              <input type="text" className="form-control ltc_value" placeholder="LTC Value" />
            </div>
            <a href="litecoin:ltc1qtg4vny9ypdwm5nycmgqp0xx55m7fgqrfe8hpn8?amount=0.001" className="payment_link_ltc btn btn-primary btn-block mt-2 lg:mb-0">Pay with LTC</a>
          </div>
        </div>
        <h5 className="mt-4 text-xl">Payment instructions</h5>
        <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item">Adding funds to your account confirms that you have read our <a href="/service-rules" className="text-blue-500">Terms</a> and agree with our rules. You can add a deposit of $50 with multiple payments. Upon the first confirmation of the transaction, the payment amount is automatically added.</li>
          <hr className="my-4 border-gray-300" />
          <li className="list-group-item">
            Once the first transaction has been confirmed, the payment amount will be added automatically. Due to slowdowns in the Bitcoin/Litecoin network, the Service is not responsible for delays in money transfers.</li>
          <hr className="my-4 border-gray-300" />
          <li className="list-group-item">
            The account will be credited with Bitstamp&apos;s exchange rate at the time of the first confirmation. If the payment doesn&apos;t update within 2 hours after receiving confirmation, please make a ticket to process us manually.{' '}
            <hr className="my-4 border-gray-300" />
            You are welcome to change the top-up address by contacting support.
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Payments;
