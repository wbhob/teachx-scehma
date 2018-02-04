import { Job } from './job'
export class Project extends Job {
    duration = 2;
    expertType: 'guest' | 'expert' = 'guest';
    location?: string;
    number: number = 40;
    other?: string;
    person: 'tutor' | 'expert' | 'field-trip' | 'other' = 'tutor';
    recurring = false;

    constructor(project?: Project) {
        super(project);
        this.type = 'instructional';
        if (project) {
            this.date = project.date;
            this.description = project.description;
            this.duration = project.duration;
            this.expertType = project.expertType;
            this.location = project.location;
            this.number = project.number;
            this.person = project.person;
            this.recurring = project.recurring;
        }
    }

}
