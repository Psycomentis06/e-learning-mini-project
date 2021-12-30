import { IFramework } from "./framework.interface";

export interface ILanguage {
    id: number
    name: string
    logo: string
    description: string
    frameworks: IFramework[]
}