import { civilState } from './enums/civilState';

export interface Employee {
  name: string;
  motherName: string;
  cpf: string;
  birthDate: string;
  plan: string;
  civilState: civilState;
}
