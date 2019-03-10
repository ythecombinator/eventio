import React, {FunctionComponent} from 'react';
import {User} from 'modules/auth/models';
import {EventAttendenceRequest} from 'modules/events/actions';
import {Event} from 'modules/events/models';

import {ButtonWithState} from 'components/StatefulButton';

import Description from './components/Description';
import Info from './components/Info';
import {EventView, InfoView, ListItemView} from './style';

interface Props extends Event {
  currentUser: Partial<User>;
  join: (request: EventAttendenceRequest) => void;
  leave: (request: EventAttendenceRequest) => void;
}

const ListItem: FunctionComponent<Props> = (props) => {
  const {
    currentUser,
    id,
    startsAt,
    title,
    owner,
    capacity,
    attendees,
    join,
    leave,
    description,
  } = props;

  const buttonProps = {currentUser, ownerId: owner.id, attendees, eventId: id};
  return (
    <ListItemView>
      <EventView>
        <Description title={title} description={description} eventId={id} />
        <InfoView>
          <Info owner={owner} startsAt={startsAt} attendees={attendees} capacity={capacity} />
          <div>
            <ButtonWithState {...buttonProps} join={join} leave={leave} />
          </div>
        </InfoView>
      </EventView>
    </ListItemView>
  );
};

ListItem.defaultProps = {
  attendees: [],
  currentUser: {id: ''},
};

export default ListItem;
