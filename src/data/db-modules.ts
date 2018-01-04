import { Module } from '../models/Module';
import { ModUpdate } from '../models/ModUpdate';

export const DBMODULES: Module[] = [
    {
        id: 1,
        name: 'Transmog',
        intro: 'Plug&Play transmog module for AzerothCore, based on Rochet2 works',
        description: 
        `<p>This is a module for AzerothCore that adds transmog feature, it's based on Rochet2 Transmog Script.</p>
        <p>Transmogrification allows you to change the appearance of an item to another item - <b>on 3.3.5 patch</b>.
        You can use any item in your bags as source of display, as long as it fits the requirements.
        The UI has been redesigned with icons and quality coloured item names to enhance the usability and viewing experience.</p>

        <p>The system is dynamicly using all items - custom items work by default.
        The transmogrifier includes a system to store a limited amount of outfits.
        The default requirements are blizzlike however you can easily change these settings through configuration files.
        You can also tweak many other settings through the configuration file without recompiling.</p>`,
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
        `<p>Phased Duels module create a separated phase for dueling players.</p>
        <img src="https://github.com/conan513/mod-phased-duels/raw/master/phasedduels.gif" alt="Phased Duels">`,
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
        `<p>BetterItemReloading is a C++ Azerothcore module which allows to reload items on the server side and as much as possible on the client side of WoW 3.3.5.</p>

        <p>Sadly some things are cached on the client which can't be properly invalidated and need DBC file changes.</p>
        <p>The following things must be changed in DBC files: </p>
        <ul>
        <li>ItemClass</li>
        <li>ItemSubClass</li>
        <li>sound_override_subclassid</li>
        <li>MaterialID</li>
        <li>ItemDisplayInfo</li>
        <li>InventorySlotID</li>
        <li>SheathID</li>
        </ul>
        <p>Multiple items can be reloaded by splitting each entry id with a space like: .breload item 12345 23456 34567</p>

        <p>Here's an example how i change an item on the fly in the database and reload it without restarting anything:</p>
        <img src="https://github.com/azerothcore/mod-betteritemreloading/raw/master/Example.gif" alt="BetterItemReloading">
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