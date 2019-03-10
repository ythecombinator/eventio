import {User} from 'modules/auth/models';

export interface Event {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  owner: User;
  attendees: User[];
  createdAt: string;
  updatedAt: string;
}

export enum EventTypes {
  all = 'ALL EVENTS',
  future = 'FUTURE EVENTS',
  past = 'PAST EVENTS',
}

export enum ViewTypes {
  grid = 'grid',
  list = 'list',
}
