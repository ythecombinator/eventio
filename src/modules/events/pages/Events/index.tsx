import {Component} from 'react';
import {compose} from 'redux';

import Head from 'next/head';

import {withLoginCheck} from 'utils/hocs';

import config from 'config/environment';

import connect, {MappedProps} from './Connector';

const appName = config.settings.app.name;

interface Props extends MappedProps {}

class Events extends Component<Props> {
  componentDidMount() {
    this.props.list();
  }

  render() {
    const {events} = this.props;
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>{appName} | Dashboard</title>
        </Head>
      </div>
    );
  }
}

export default compose(
  withLoginCheck({shouldBeLogged: true}),
  connect,
)(Events);
