import React from 'react';
import Page from '../components/Page';
import '../css/PaymentStatus.css';

const ViewMessage = ({ type }) => {
    return (
        <Page title="Payment Status">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                            <div className="view-message view-message--success text-center py-5">
                                <img
                                    src="https://i.ibb.co/yByr2gQ/success.png"
                                    alt="success"
                                    className="view-message__image img-fluid"
                                />
                                <h3 className="view-message__title">
                                    Payment Success <i className="far fa-check-circle view-message__title__icon"></i>
                                </h3>
                                <p className="view-message__text">Your payment is successful!</p>
                                <a href="#!" className="view-message__btn">Download Invoice</a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ViewMessage;
