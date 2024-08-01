import React from "react";
import Page from "../components/Page";
import '../css/plans.css';

const Plans = () => {
  return (
    <Page title="Plans">
      <div className="wrapper">
        <div className="package">
        <a href="/checkout">
          <div className="name">Standard</div>
          <div className="price">₹299</div>
          <div className="trial">Free 15 day trial</div>
          <hr />
          <ul>
            <li  id="lol"><strong>HD</strong> Video Quality</li>
            <li  id="lol"><strong> Basic + National </strong>Channels Available</li>
            <li  id="lol"><strong>Two </strong>Screens at the Same Time</li>
          </ul>
          </a>
        </div>
        <div className="package brilliant">
        <a href="/checkout">
          <div className="name">Premium</div>
          <div className="price">₹499</div>
          <div className="trial">Free 15 day trial</div>
          <hr />
          <ul>
            <li  id="lol"><strong>FHD</strong> Video Quality</li>
            <li  id="lol"><strong>All</strong> Channels Available</li>
            <li  id="lol"><strong>Four</strong> Screens at the Same Time</li>
          </ul>
          </a>
        </div>
        <div className="package">
          <a href="/checkout">
          <div className="name">Basic</div>
          <div className="price">₹149</div>
          <div className="trial">Free 30 day trial</div>
          <hr />
          <ul>
            <li id="lol"><strong>SD</strong> Video Quality</li>
            <li id="lol"><strong>Free + Basic</strong> channels available</li>
            <li id="lol">Only <strong>One</strong> Screen at the Same Iime</li>
          </ul>
          </a>
        </div>
      </div>
    </Page>
  );
};

export default Plans;
