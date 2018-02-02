import { Job } from './job'
export class Project extends Job {
    person: 'tutor' | 'expert' | 'field-trip' | 'other' = 'tutor';
    other?: string;
    number: number = 40;
    location?: string;
    expertType: 'guest' | 'expert' = 'guest';

    constructor(project?: Project) {
        super(project);
        this.type = 'instructional';
        if (project) {
            this.date = project.date;
            this.person = project.person;
            this.number = project.number;
            this.location = project.location;
            this.expertType = project.expertType;
            this.description = project.description;
        }
    }

}
