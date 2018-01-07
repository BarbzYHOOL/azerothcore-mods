import { Module } from '../models/Module';
import { ModUpdate } from '../models/ModUpdate';

export const DBMODULES: Module[] = [
    {
        id: 1,
        name: 'Transmog',
        intro: 'Plug&Play transmog module for AzerothCore, based on Rochet2 works',
        description: 
        `This is a module for AzerothCore that adds transmog feature, it's based on Rochet2 Transmog Script.
        Transmogrification allows you to change the appearance of an item to another item - **on 3.3.5 patch**.
        You can use any item in your bags as source of display, as long as it fits the requirements.
        The UI has been redesigned with icons and quality coloured item names to enhance the usability and viewing experience.

        The system is dynamicly using all items - custom items work by default.
        The transmogrifier includes a system to store a limited amount of outfits.
        The default requirements are blizzlike however you can easily change these settings through configuration files.
        You can also tweak many other settings through the configuration file without recompiling.`,
        version: '1.0.0',
        author: 'Rotchet2',
        authorUrl: `https://github.com/Rochet2`,
        repoUrl: `https://github.com/azerothcore/mod-transmog/`,
        downloadUrl: `https://github.com/azerothcore/mod-transmog/archive/master.zip`,
        logoUrl: 'http://rochet2.github.io/images/icon_Transmogrification.png',
        tags: ["cosmetics", "items"],
        license: 'GNU AGPL license',
        updates: []
    },

    {
        id: 2,
        name: 'Phased Duels',
        intro: 'Phased Duels module create a separated phase for dueling players.',
        description: 
        `Phased Duels module create a separated phase for dueling players.
        ![Example](https://github.com/conan513/mod-phased-duels/raw/master/phasedduels.gif)`,
        version: '1.0.0',
        author: 'conan513',
        authorUrl: `https://github.com/conan513`,
        repoUrl: `https://github.com/conan513/mod-phased-duels`,
        downloadUrl: `https://github.com/conan513/mod-phased-duels/archive/master.zip`,
        logoUrl: 'https://raw.githubusercontent.com/azerothcore/azerothcore.github.io/master/images/logo-github.png',
        tags: ["pvp", "duels"],
        license: 'GNU AGPL license',
        updates: []
    },

    {
        id: 3,
        name: 'BetterItemReloading',
        intro: 'BetterItemReloading is a C++ Azerothcore module which allows to reload items on the server side and as much as possible on the client side of WoW 3.3.5.',
        description: 
        `BetterItemReloading is a C++ Azerothcore module which allows to reload items on the server side and as much as possible on the client side of WoW 3.3.5.

        Sadly some things are cached on the client which can't be properly invalidated and need DBC file changes.
        The following things must be changed in DBC files: 
        
        + ItemClass
        + ItemSubClass
        + sound_override_subclassid
        + MaterialID
        + ItemDisplayInfo
        + InventorySlotID
        + SheathID
        
        Multiple items can be reloaded by splitting each entry id with a space like: .breload item 12345 23456 34567

        Here's an example how i change an item on the fly in the database and reload it without restarting anything:
        ![Example](https://github.com/azerothcore/mod-betteritemreloading/raw/master/Example.gif)
        `,
        version: '1.0.0',
        author: 'Kaev',
        authorUrl: `https://github.com/Kaev`,
        repoUrl: `https://github.com/Kaev/BetterItemReloading`,
        downloadUrl: `https://github.com/Kaev/BetterItemReloading/archive/master.zip`,
        logoUrl: 'https://raw.githubusercontent.com/azerothcore/azerothcore.github.io/master/images/logo-github.png',
        tags: ["enhancement", "items"],
        license: 'MIT License',
        updates: []
    },
];