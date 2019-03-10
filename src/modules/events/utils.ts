import {EventTypes} from './models';

export const filterItem = (type) => (data) => {
  const today = new Date();
  const eventDate = new Date(data.startsAt);

  if (type === EventTypes.all) {
    return true;
  }

  if (type === EventTypes.future && today < eventDate) {
    return true;
  }

  if (type === EventTypes.past && today > eventDate) {
    return true;
  }

  return false;
};
