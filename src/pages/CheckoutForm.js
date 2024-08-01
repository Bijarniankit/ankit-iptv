import React from 'react';
import Page from '../components/Page';
import '../css/CheckoutForm.css';

const CheckoutForm = () => {
  return (
    <Page title="Checkout">
    <div className="container">
      <form className="form-horizontal">
        <div>
          <legend>
            <h1 className="form-top">Payment</h1>
          </legend>
          <div className="form-group">
            <label className="control-label" htmlFor="card-holder-name">Name</label>
            <div>
              <input
                type="text"
                className="form-control"
                name="card-holder-name"
                id="card-holder-name"
                placeholder="Card Holder's Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="card-number">Number</label>
            <div>
              <input
                type="text"
                className="form-control"
                name="card-number"
                id="card-number"
                placeholder="Debit/Credit Card Number"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="expiry-month">Expiration</label>
            <div>
              <div className="row">
                <div className="col-xs-6">
                  <select className="form-control" name="expiry-month" id="expiry-month">
                    <option>Month</option>
                    <option value="01">Jan (01)</option>
                    <option value="02">Feb (02)</option>
                    <option value="03">Mar (03)</option>
                    <option value="04">Apr (04)</option>
                    <option value="05">May (05)</option>
                    <option value="06">June (06)</option>
                    <option value="07">July (07)</option>
                    <option value="08">Aug (08)</option>
                    <option value="09">Sep (09)</option>
                    <option value="10">Oct (10)</option>
                    <option value="11">Nov (11)</option>
                    <option value="12">Dec (12)</option>
                  </select>
                </div>
                <div className="col-xs-6">
                  <select className="form-control" name="expiry-year" >
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                    <option value="23">2024</option>
                    <option value="23">2025</option>
                    <option value="23">2026</option>
                    <option value="23">2027</option>
                    <option value="23">2028</option>
                    <option value="23">2029</option>
                    <option value="23">2030</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="cvv">Card CVV</label>
            <div>
              <input
                type="text"
                className="form-control"
                name="cvv"
                id="cvv"
                placeholder="Security Code"
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <div>
              <button type="button" className="btn btn-success" id="pay-now">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </Page>
  );
};

export default CheckoutForm;
