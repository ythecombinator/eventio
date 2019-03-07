import React, {Component, ComponentType} from 'react';
import {NextContext} from 'next';

import {parseCookies} from 'utils/cookies';
import {isValid} from 'utils/jwt';

export interface WithLoginCheckProps {}

type NextPage<P extends WithLoginCheckProps> = ComponentType<P> & {
  getInitialProps?: (ctx: NextContext) => Promise<P> | P;
};

interface Options {
  shouldBeLogged: boolean;
}

const withLoginCheck = (options: Options) => <P extends WithLoginCheckProps>(Page: NextPage<P>) =>
  class Enhanced extends Component<P & WithLoginCheckProps> {
    static displayName = `withLoginCheck(${Page.displayName})`;

    static async getInitialProps(ctx: NextContext) {
      const {req, res} = ctx;
      const {shouldBeLogged} = options;

      const authenticationToken = parseCookies(req).authenticationToken;

      if (shouldBeLogged) {
        if (!isValid(authenticationToken)) {
          res.writeHead(302, {
            Location: '/sign-in',
          });
          res.end();
        }
      } else {
        if (isValid(authenticationToken)) {
          res.writeHead(302, {
            Location: '/events',
          });
          res.end();
        }
      }
    }

    render() {
      return <Page {...this.props} />;
    }
  };

export default withLoginCheck;
