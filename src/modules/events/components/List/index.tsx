import React, {Component} from 'react';
import isEqual from 'lodash/isEqual';
import {User} from 'modules/auth/models';
import {EventAttendenceRequest} from 'modules/events/actions';
import EventCard from 'modules/events/components/EventCard';
import ListItem from 'modules/events/components/ListItem';
import {Event, EventTypes, ViewTypes} from 'modules/events/models';
import {filterItem} from 'modules/events/utils';

import Section from 'layouts/Section';

import EmptyState from './components/EmptyState';
import {GridView} from './style';
import {Provider} from './utils';

const defaultProps = {
  grid: 3,
  title: null,
  events: [],
  loading: true,
};

interface Props {
  grid: number;
  title: string;
  loading: boolean;
  events: Event[];
  currentUser: User;
  join: (request: EventAttendenceRequest) => void;
  leave: (request: EventAttendenceRequest) => void;
}

const initialState = {
  prevEvents: [],
  events: [],
  loading: true,
  hasEvents: false,
  view: ViewTypes.grid,
  filter: EventTypes.future,
};

type State = typeof initialState;

export default class List extends Component<Props, State> {
  static defaultProps = defaultProps;

  readonly state = initialState;

  static getDerivedStateFromProps(props: Props, state: State) {
    if (isEqual(state.prevEvents, props.events)) {
      return {};
    }
    return {
      hasEvents: props.events.length > 0,
      prevEvents: props.events,
      events: props.events.filter(filterItem(EventTypes.future)),
    };
  }

  toggleView = (view) => {
    this.setState({view});
  };

  toggleFilter = (filter) => {
    const {events} = this.props;
    const newEvents = events.filter(filterItem(filter));
    this.setState({
      filter,
      hasEvents: newEvents.length > 0,
      events: newEvents,
    });
  };

  renderItem = (event, currentUser) => {
    const {view} = this.state;
    const {join, leave} = this.props;

    const EventComponent = view === ViewTypes.grid ? EventCard : ListItem;

    return (
      <EventComponent
        {...event}
        currentUser={currentUser}
        join={join}
        leave={leave}
        trimDescription={true}
      />
    );
  };

  renderList = () => {
    const {currentUser} = this.props;
    const {events, view} = this.state;
    const isList = view === ViewTypes.list;
    return (
      <Section>
        <GridView isList={isList}>
          {events.map((event) => this.renderItem(event, currentUser))}
        </GridView>
      </Section>
    );
  };

  renderMessage = () => {
    const {loading} = this.props;
    return <EmptyState message="No Events" loading={loading} />;
  };

  render() {
    const {children} = this.props;
    const {hasEvents} = this.state;

    const providerValue = {
      ...this.state,
      toggleFilter: this.toggleFilter,
      toggleView: this.toggleView,
    };

    return (
      <Provider value={providerValue}>
        <Section>{children}</Section>
        {hasEvents ? this.renderList() : this.renderMessage()}
      </Provider>
    );
  }
}
