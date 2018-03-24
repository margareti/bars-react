import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => (
  <div className="container">
    <h1>My Work</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/bar/1">Item One</Link>
    <Link to="/bar/2">Item Two</Link>
  </div>
);

export default Order;
