import { IModule } from "./module.interface";
import { ITeacher } from "./teacher.interface";

export interface ICourse {
    id:number
    name: string;
    description: string;
    teacher: ITeacher;
    version: string;
    cover: string;
    lastUpdate: Date;
    chapters: IModule[];
}