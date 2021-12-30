import { ILesson } from "./lesson.interface";

export interface IModule {
    id: number
    title: string;
    description: string;
    lessons: ILesson[]
}