import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { name, labelText, id, options, onChange, className } = props;

  return (
    <label htmlFor={ id }>
      { labelText }
      <select
        name={ name }
        id={ id }
        className={ className }
        onChange={ onChange }
      >
        {
          options ? options.map((item, index) => (
            <option
              key={ index }
              className="option"
              value={ item }
            >
              { item }
            </option>
          )) : null
        }
      </select>
    </label>
  );
}

const { string, func } = PropTypes;

Select.propTypes = {
  name: string,
  labelText: string,
  id: string,
  onChange: func,
  className: string,
}.isRequired;

export default Select;
