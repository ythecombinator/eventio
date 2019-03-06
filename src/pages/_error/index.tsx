import {Component} from 'react';
import HTTPStatus from 'http-status';
import {NextContext} from 'next';

import Head from 'next/head';
import Router from 'next/router';

import Button, {ButtonColor, ButtonSize} from 'components/Button';
import LeftPanel from 'components/LeftPanel';
import Logo from 'components/Logo';
import TrooperImage from 'components/TrooperImage';

import config from 'config/environment';

import ErrorView from './style';

const appName = config.settings.app.name;

interface Props {
  title: string;
  statusCode: number;
}

class Error extends Component<Props> {
  static getInitialProps(ctx: NextContext) {
    const {err, res} = ctx;
    const statusCode = res ? res.statusCode : err ? (err as any).statusCode : null;
    const title =
      statusCode === 404
        ? 'This page could not be found'
        : HTTPStatus[statusCode] || 'An unexpected error has occurred';

    return {title, statusCode};
  }

  redirectToHome = () => {
    Router.push('/');
  };

  render() {
    const {title, statusCode} = this.props;

    return (
      <div>
        <Head>
          <title>
            {appName} | {statusCode}: {title}
          </title>
        </Head>
        <div>
          <Logo color="light" />
          <LeftPanel />

          <ErrorView>
            <h1>404 Error - page not found</h1>
            <p>
              Seems like Darth Vader just hits our website and drops it down.
              <br />
              Please press the refresh button and everything should be fine again.
            </p>

            <Button
              dimensions={ButtonSize.large}
              color={ButtonColor.quaternary}
              onClick={this.redirectToHome}
            >
              Refresh
            </Button>
          </ErrorView>

          <TrooperImage />
        </div>
      </div>
    );
  }
}

export default Error;
