import React, {FunctionComponent} from 'react';
import {User} from 'modules/auth/models';

import {format} from 'utils/date';

import {AttendeesView, DateView, InfoView, OwnerView} from './style';

interface Props {
  startsAt: string;
  attendees: User[];
  capacity: number;
  owner: User;
}

const Info: FunctionComponent<Props> = (props) => {
  const {startsAt, attendees, capacity, owner} = props;
  return (
    <>
      <OwnerView>
        {owner.firstName} {owner.lastName}
      </OwnerView>
      <DateView>{format(startsAt)}</DateView>
      <AttendeesView>
        {attendees.length} of {capacity}
      </AttendeesView>
    </>
  );
};

export default Info;
