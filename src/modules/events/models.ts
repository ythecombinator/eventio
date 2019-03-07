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
