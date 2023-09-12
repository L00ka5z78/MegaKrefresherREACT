import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <h1>Santa App</h1>
      Menu:
      <Link to="/gift">GiftS</Link> | <Link to="/test">test</Link>
      <hr />
    </>
  );
};
