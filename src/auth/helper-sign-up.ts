import { TeacherSignUp } from "./teacher-sign-up";

export class HelperSignUp extends TeacherSignUp {
    education?: string;
    specialty?: string;
    ssn?: string = '';
    dob?: string = '';
    occupation?: string;
    zip?: string;
}
