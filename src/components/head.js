import React from 'react';
import { Link } from 'gatsby';

function Head() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Link to="/">home</Link>
      <div style={{ flexGrow: 1 }}></div>
      <Link to="/about">about</Link>
      <Link to="/test-page">test-page</Link>
    </div>
  );
}
export default Head;
