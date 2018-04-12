// Actions
const ITEMS = {
    createItems: 'ITEMS::CREATE_ITEMS',
    addItem: 'ITEM::ADD_ITEM'
};

const defaultReducer = {
    items: []
};

// Reducer
export default function reducer(state = defaultReducer, action) {
    switch (action.type) {
        case ITEMS.createItems:
            return {
                items: [1, 2, 3, 4, 5, 6]
            };
        case ITEMS.addItem:
            return {
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}

// Action Creators
export function createItems () {
    return {
        type: ITEMS.createItems,
        payload: null
    }
}

export function addItem (number) {
    return {
        type: ITEMS.addItem,
        payload: number
    }
}