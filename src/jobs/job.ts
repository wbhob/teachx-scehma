export class Job {
    _id: any;
    creator: any;
    teacher: string;
    type: 'instructional' | 'safespace';
    school: string;
    helpers: any[] = [];
    date: string;
    description: string;
    assignedHelper: string;
    timestamp: string;
    updated: string;

    constructor(job?: Job) {
        if (job) {
            this.creator = job.creator;
        }
    }
}
