import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/trybewallet">Página Inicial</Link>
    </div>
  );
}

export default NotFound;
