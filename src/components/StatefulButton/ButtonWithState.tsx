import React from 'react';
import Router from 'next/router';

import Button, {ButtonSize, ButtonType} from './Button';

const buttonStates = ({ownerId, currentUser, attendees, join, leave, capacity}) => {
  const state = {
    edit: {
      type: ButtonType.update,
      text: 'edit',
      action: (eventId) =>
        Router.push({
          pathname: '/event',
          query: {id: eventId, edit: true},
        }),
    },
    leave: {
      type: ButtonType.alert,
      text: 'leave',
      action: leave,
    },
    join: {
      type: ButtonType.primary,
      text: 'join',
      action: join,
    },
    full: {
      type: ButtonType.disabled,
      text: 'Full',
      action: () => null,
    },
  };

  if (ownerId === currentUser.id) {
    return state.edit;
  }

  const amIAttendee = attendees.find((attendee) => attendee.id === currentUser.id);

  if (amIAttendee) {
    return state.leave;
  }

  if (attendees.length >= capacity) {
    return state.full;
  }

  return state.join;
};

const ButtonWithState = (props) => {
  const {currentUser, ownerId, attendees, join, leave, eventId, capacity} = props;
  const buttonInfo = buttonStates({
    currentUser,
    ownerId,
    attendees,
    join,
    leave,
    capacity,
  });
  return (
    <Button
      onClick={() => buttonInfo.action({id: eventId, currentUser})}
      type={buttonInfo.type}
      size={ButtonSize.small}
    >
      {buttonInfo.text}
    </Button>
  );
};

ButtonWithState.defaultProps = {
  actionCallback: () => null,
};

export default ButtonWithState;
