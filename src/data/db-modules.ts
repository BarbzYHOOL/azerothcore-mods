import { Module } from '../models/Module';
import { ModUpdate } from '../models/ModUpdate';

export const DBMODULES: Module[] = [
    {
        id: 1,
        name: 'My PvP Module',
        description: `Peter Piper picked a peck of pickled peppers
            A peck of pickled peppers Peter Piper picked
            If Peter Piper picked a peck of pickled peppers
            Where’s the peck of pickled peppers Peter Piper picked?`,
        version: '1.0.0',
        author: 'John Doe',
        authorUrl: `https://www.foo.bar`,
        repoUrl: `https://github.com/JohnDoe/Module-test`,
        downloadUrl: `https://dl.github.com/JohnDoe/Module-test.zip`,
        logoUrl: 'https://raw.githubusercontent.com/azerothcore/azerothcore.github.io/master/images/logo-github.png',
        tags: ["duels", "pvp"],
        license: 'GPL 3',
        updates: []
    },

    {
        id: 2,
        name: 'My Transmog Module',
        description: `Betty Botter bought some butter
            But she said the butter’s bitter
            If I put it in my batter, it will make my batter bitter
            But a bit of better butter will make my batter better
            So ‘twas better Betty Botter bought a bit of better butter`,
        version: '1.0.0',
        author: 'John Doe',
        authorUrl: `https://www.foo.bar`,
        repoUrl: `https://github.com/JohnDoe/MyModule`,
        downloadUrl: `https://dl.github.com/JohnDoe/MyModule.zip`,
        logoUrl: 'https://raw.githubusercontent.com/azerothcore/azerothcore.github.io/master/images/logo-github.png',
        tags: ["cosmetics", "items"],
        license: 'GPL 3',
        updates: []
    },
];