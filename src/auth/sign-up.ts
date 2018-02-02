import { Subject } from "../types/subject";

export class SignUpBase {
    name: string = '';
    email: string = '';
    password: string = '';
    role: 'teacher' | 'helper';
    school: string;
    grades?: string[];
    subject?: string[];
}
