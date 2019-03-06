import React from 'react';
import {Provider, ProviderProps} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {AnyAction} from 'redux';

import NextApp, {AppComponentContext, Container} from 'next/app';
import Head from 'next/head';
import {withRouter, WithRouterProps} from 'next/router';
import {ThemeProvider} from 'styled-components';

import Layout from 'components/Layout';

import configureStore from 'core/store';

import {theme} from 'utils/theme';

import config from 'config/environment';

const appName = config.settings.app.name;

interface Props extends WithRouterProps, ProviderProps<AnyAction> {}

class App extends NextApp<Props> {
  static async getInitialProps({ctx, Component}: AppComponentContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Container>
        <Head>
          <title>{appName}</title>
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout {...this.props}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withRouter(App));
