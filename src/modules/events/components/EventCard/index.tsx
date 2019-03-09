import React, {FunctionComponent} from 'react';
import {User} from 'modules/auth/models';
import {Event} from 'modules/events/models';
import Link from 'next/link';

import {User as UserIcon} from 'components/Icons';
import {ButtonWithState} from 'components/StatefulButton';

import {format} from 'utils/date';
import {trim} from 'utils/string';

import {
  EventCardAboutView,
  EventCardAtendeesView,
  EventCardDateView,
  EventCardDescriptionView,
  EventCardFooterView,
  EventCardLinkView,
  EventCardView,
} from './style';

interface EventCardProps extends Partial<Event> {
  currentUser: Partial<User>;
  trimDescription: boolean;
  size: 'default' | 'big';
  join: (id: string, currentUser: User) => void;
  leave: (id: string, currentUser: User) => void;
}

const EventCard: FunctionComponent<EventCardProps> = (props) => {
  const {
    currentUser,
    startsAt,
    title,
    owner,
    capacity,
    attendees,
    description,
    size,
    trimDescription,
    id,
    join,
    leave,
  } = props;

  const buttonProps = {
    currentUser,
    ownerId: owner.id,
    attendees,
    capacity,
    eventId: id,
    actionCallback: () => null,
  };

  const linkProps = {pathname: '/event', query: {id}};

  const eventDescription = trimDescription ? trim(description, 100) : description;

  return (
    <EventCardView size={size}>
      <EventCardDateView>{format(startsAt)}</EventCardDateView>
      <Link href={linkProps}>
        <EventCardLinkView>
          <EventCardAboutView>
            <h5>{title}</h5>
            <p>
              {owner.firstName} {owner.lastName}
            </p>
          </EventCardAboutView>
          <EventCardDescriptionView>{eventDescription}</EventCardDescriptionView>
        </EventCardLinkView>
      </Link>
      <EventCardFooterView>
        <EventCardAtendeesView>
          <UserIcon color="#949EA8" width={16} height={16} />
          <span>
            {attendees.length} of {capacity}
          </span>
        </EventCardAtendeesView>
        <ButtonWithState {...buttonProps} join={join} leave={leave} />
      </EventCardFooterView>
    </EventCardView>
  );
};

EventCard.defaultProps = {
  currentUser: {id: ''},
  size: 'default',
  trimDescription: false,
  attendees: [],
};

EventCard.displayName = 'EventCard';

export default EventCard;
