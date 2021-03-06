import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tbody from './Tbody';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const tableHeaders = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Excluir',
    ];

    return (
      <div>
        <table className="table">
          <thead>
            <tr className="table-row">
              {tableHeaders.map((name) => <th key={ name } className="table-cell">{name}</th>)}
            </tr>
          </thead>
          <tbody>
            <Tbody />
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <section>
        {this.renderTable()}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const { arrayOf, object } = PropTypes;

Table.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps)(Table);
