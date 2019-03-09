import server from 'utils/server';

const list = () => {
  return server.get('events');
};

const attend = (id: string) => {
  return server.post(`events/${id}/attendees/me`);
};

const unattend = (id: string) => {
  return server.delete(`events/${id}/attendees/me`);
};

export {list, attend, unattend};
