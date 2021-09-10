import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount() {
    const { getWalletExpenses } = this.props;
    const result = getWalletExpenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;

      acc += (parseFloat(value) * parseFloat(rate));
      return acc;
    }, 0);
    return Math.round(result * 100) / 100;
  }

  render() {
    const { user } = this.props;

    return (
      <header className="header">
        <h3 data-testid="email-field">
          Email:
          <span>{` ${user}`}</span>
        </h3>

        <div data-testid="total-field">
          <p>
            Despesa total: R$
            {this.totalAmount()}
          </p>
        </div>

        <div data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </div>
        <Link to="/trybewallet" className="link">Home</Link>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  getWalletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
