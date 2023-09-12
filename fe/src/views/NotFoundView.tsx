import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../utils/lost.jpg';

export const NotFoundView = () => (
  <>
    <h1>View not found.</h1>
    <div className="not_found">
      <img className="not_found_img" src={NotFound} alt="maze :)" />
      <Link to="/gift">Go back to home page</Link>
    </div>
  </>
);
