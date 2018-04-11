import {createContext} from 'react';

const AppContext = createContext({
    header: ['Name', 'Item Name', 'Item Price'],
    items: [
            ['Alvin', 'Eclair', '$0.87'],
            ['Alan', 'Jellybean', '$3.76'],
            ['Jonathan', 'Lollipop', '$7.00'],
        ]
});

let {Provider, Consumer} = AppContext;

export {Provider, Consumer};