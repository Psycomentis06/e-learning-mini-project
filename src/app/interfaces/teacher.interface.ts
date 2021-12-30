import { ICourse } from "./course.interface";

export interface ITeacher {
    id: number
    name: string;
    university?: string;
    description?: string;
    avatar?: string;
    courses: ICourse[];
    email: string;
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
}