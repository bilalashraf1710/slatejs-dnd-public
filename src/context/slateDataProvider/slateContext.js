import { createContext } from 'react';

const initialState = {
    sections: [],
    setSections: () => { },
    updateSectionItems: () => { },
    updateSection: () => { },
}

export const SlateContext = createContext(initialState);
export const SlateContextProvider = SlateContext.Provider;