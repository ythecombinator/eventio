import {User} from 'modules/auth/models';

const getInitials = (user: User) => {
  const {firstName = '', lastName = ''} = user;
  const initials = firstName[0] + lastName[0];
  return initials || '';
};

const getFullName = (user: User) => {
  const firstName = user.firstName || '';
  const lastName = user.lastName || '';
  return `${firstName} ${lastName}`;
};

const getName = (user: User) => {
  const fullName = getFullName(user);
  const initials = getInitials(user);
  return {fullName, initials};
};

export {getName, getFullName, getInitials};
