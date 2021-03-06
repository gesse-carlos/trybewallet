import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from '../components';
import { emailChecker, passwordChecker } from '../utils/loginChecker';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      invalidEmail: true,
      invalidPassword: true,
      redirect: false,
    };

    this.validatePassword = this.validatePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validatePassword({ target: { value } }) {
    const password = passwordChecker(value);

    if (password) {
      return this.setState({
        password: value,
        invalidPassword: false,
      });
    }
    return this.setState({
      password: value,
      invalidPassword: true,
    });
  }

  validateEmail({ target: { value } }) {
    const email = emailChecker(value);

    if (email) {
      return this.setState({
        email: value,
        invalidEmail: false,
      });
    }

    return this.setState({
      email: value,
      invalidEmail: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setEmailToStore } = this.props;
    const { email, password } = this.state;

    setEmailToStore(({
      email,
      password,
    }));

    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect, invalidEmail, invalidPassword } = this.state;
    if (redirect) return <Redirect to="/trybewallet/wallet" />;

    return (
      <div className="login-container">
        <div className="logo-container">
          <div className="wallet">
            <img
              src="https://i.ibb.co/3dBLWWV/clipart1723162.png"
              alt="wallet"
              id="wallet"
            />
          </div>
          <div className="trybe">
            <img
              src="https://freecourse.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d"
              alt="trybe"
              id="trybe"
            />
          </div>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <Input
            type="text"
            placeholder="E-mail"
            className="input"
            id="email"
            testID="email-input"
            onChange={ this.validateEmail }
          />
          <Input
            type="password"
            placeholder="Senha"
            className="input"
            id="password"
            testID="password-input"
            onChange={ this.validatePassword }
          />
          <small>*M??nimo 6 caracteres</small>
          <Button
            id="submit-button"
            text="Entrar"
            disabled={ invalidEmail || invalidPassword }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setEmailToStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmailToStore: (value) => dispatch(sendUserInfo(value)),
});

export default connect(null, mapDispatchToProps)(Login);
