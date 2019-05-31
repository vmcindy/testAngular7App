import { Address } from '../object-classes/address';
import { Company } from '../object-classes/company';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}