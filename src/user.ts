import { ObjectID } from 'mongodb';

import { HelperSignUp } from './auth/helper-sign-up'
import { TeacherSignUp } from './auth/teacher-sign-up';
import { Subject } from './types/subject';

export class User implements TeacherSignUp, HelperSignUp {
    name: string = '';
    email: string = '';
    password: string = '';
    bio: string;
    _id: ObjectID | string;
    role: 'teacher' | 'helper' = 'teacher';
    education?: string;
    school: string;
    title?: string;
    ssn?: string;
    profileImage?: string;
    dob?: string;
    grades?: string[];
    subject?: string[];
    quote: string;
    zip?: string;
    occupation?: string;
}
