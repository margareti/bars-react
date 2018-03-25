import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const NotFoundPage = () => (
  <div className="container">
    <BackButton/>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
