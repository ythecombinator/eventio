import {Component} from 'react';
import {compose} from 'redux';

import List from 'modules/events/components/List';
import FilterMenu from 'modules/events/components/List/components/FilterMenu';
import ToggleLayout from 'modules/events/components/List/components/ToggleLayout';
import Router from 'next/router';

import FloatingActionButton from 'components/FloatingActionButton';
import {Add} from 'components/Icons';
import {withLoginCheck} from 'hocs';
import Page from 'layouts/Page';

import {colors} from 'utils/theme';

import connect, {MappedProps} from './Connector';
import EventsView from './style';

interface Props extends MappedProps {}

const pageProps = {
  name: 'Dashboard',
  title: 'My Dashboard',
};

class Events extends Component<Props> {
  componentDidMount() {
    this.props.list();
  }

  redirectToNew = () => {
    Router.push('/events/new/');
  };

  render() {
    const {events, user, loading, join, leave} = this.props;
    return (
      <div>
        <Page {...pageProps}>
          <List events={events} loading={loading} currentUser={user} join={join} leave={leave}>
            <EventsView>
              <FilterMenu />
              <ToggleLayout />
            </EventsView>
          </List>
          <FloatingActionButton color={colors.grayishBlue2} onClick={this.redirectToNew}>
            <Add width={14} height={14} color="white" />
          </FloatingActionButton>
        </Page>
      </div>
    );
  }
}

export default compose(
  withLoginCheck({shouldBeLogged: true}),
  connect,
)(Events);
