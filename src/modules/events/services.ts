import server from 'utils/server';

const list = () => {
  return server.get('events');
};

export {list};
