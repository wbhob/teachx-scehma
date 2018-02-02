import { Job } from './job';
export class SafeSpace extends Job {
    duration: number = 2;
    recurring: boolean = false;
    students: 'few' | 'classroom' | 'school' = 'few';

    issue = {
        cyberbullying: false,
        lgbtq: false,
        other: false,
        physical: false,
        relationship: false,
        sexual: false,
        verbal: false,
    }

    constructor(space?: SafeSpace) {
        super(space);
        this.type = 'safespace';
        if (space) {
            this.date = space.date;
            this.description = space.description || '';
            this.duration = space.duration || 2;
            this.recurring = space.recurring || false;
            this.students = space.students || 'few';

            this.issue = {
                cyberbullying: space.issue.cyberbullying || false,
                lgbtq: space.issue.lgbtq || false,
                other: space.issue.other || false,
                physical: space.issue.physical || false,
                relationship: space.issue.relationship || false,
                sexual: space.issue.sexual || false,
                verbal: space.issue.verbal || false,
            }
        }
    }
}
