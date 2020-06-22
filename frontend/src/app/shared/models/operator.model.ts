import {Person} from './person.model';

export interface Operator {
  id?: number;
  login?: string;
  password?: string;
  person?: Person;
  role?: string;
}
