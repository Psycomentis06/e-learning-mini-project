import { IFramework } from "./framework.interface";

export interface ILanguage extends IFramework {
    frameworks: IFramework[]
}