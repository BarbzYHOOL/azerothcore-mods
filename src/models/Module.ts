import { ModUpdate } from './ModUpdate';

export class Module {
    id: number;
    name: string;
    intro: string;
    description: string;
    version: string;
    author: string;
    authorUrl: string;
    repoUrl: string;
    downloadUrl: string;
    logoUrl: string;
    tags: Array<string>;
    license: string;
    updates: Array<ModUpdate>; // [date, string]
}