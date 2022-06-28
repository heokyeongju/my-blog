import React from 'react';
import { Link } from 'gatsby';

function Head() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <div style={{ flexGrow: 1 }}></div>
    </div>
  );
}
export default Head;
