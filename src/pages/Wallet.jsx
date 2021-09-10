import React from 'react';
import { Link } from 'react-router-dom';
import Expenses from '../components/Expenses';
import { Header } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <Link to="/trybewallet">Home</Link>
      </div>
    );
  }
}

export default Wallet;
