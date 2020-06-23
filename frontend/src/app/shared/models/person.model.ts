export interface Person {
  id?: number;
  name: string;
  document: string;
  nameFather?: string;
  nameMother?: string;
  typePerson: string;
  dateBirth: Date;
  loginOperator: string;
  createdAt?: Date;
  updateAt?: Date;
}
