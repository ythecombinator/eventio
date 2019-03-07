import {ChangeEvent, Component, FormEvent} from 'react';
import {compose} from 'redux';

import Head from 'next/head';
import Link from 'next/link';

import Button, {ButtonColor, ButtonSize} from 'components/Button';
import Form from 'components/Form';
import FormField from 'components/FormField';
import {Visibility} from 'components/Icons';
import LeftPanel from 'components/LeftPanel';
import Logo from 'components/Logo';

import {withLoginCheck} from 'utils/hocs';

import config from 'config/environment';

import connect, {MappedProps} from './Connector';

const appName = config.settings.app.name;

const initialState = {
  email: '',
  password: '',
  showPassword: false,
};

interface Props extends MappedProps {}

type State = typeof initialState;

class Login extends Component<Props, State> {
  readonly state = initialState;

  handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value as string | boolean;

    this.setState({
      [evt.target.name]: newValue,
    } as State);
  };

  handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const {email, password} = this.state;
    this.props.login({email, password});
  };

  togglePasswordView = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        showPassword: !prevState.showPassword,
      };
    });
  };

  getPasswordView = () => {
    return this.state.showPassword ? 'text' : 'password';
  };

  render() {
    const {loading, error} = this.props;
    return (
      <div>
        <Head>
          <title>{appName} | Sign In</title>
        </Head>

        <Logo color="light" />

        <LeftPanel />

        <Form onSubmit={this.handleOnSubmit} error={error} noValidate>
          <h1>Sign in to Eventio.</h1>
          <p>{error ? error : 'Enter your details below.'}</p>

          <FormField value={this.state.email} error={error}>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Email</label>
          </FormField>

          <FormField value={this.state.password} error={error}>
            <input
              className="passwordInput"
              name="password"
              type={this.getPasswordView()}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <Visibility width={22} height={16} color="#E1E4E6" onClick={this.togglePasswordView} />
          </FormField>

          <div className="signup-link">
            <Link href="sign-up">
              <p>
                Don’t have account? <strong>Sign up</strong>
              </p>
            </Link>
          </div>

          <Button dimensions={ButtonSize.large} color={ButtonColor.primary} loading={loading}>
            Sign in
          </Button>
        </Form>
      </div>
    );
  }
}

export default compose(
  withLoginCheck({shouldBeLogged: false}),
  connect,
)(Login);
