import { civilState } from './enums/civilState';

export interface Employee {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  plan: string;
  civilState: civilState;
}

export interface CreateEmployee extends Employee {
  motherName: string;
  rg: string;
  admissionDate: string;
  validityDate: string;
  registration: string;
}
