import { atom, selector } from "recoil"; // import atom from recoil

export const countAtom = atom({
    key: "countAtom", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value) 
})

export const evenSelector = selector({ // selector is used to derive the value from the atom
    key: "evenSelector", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {  // get is a function that is used to get the value of the atom ( { get } is a destructuring syntax) get: ({get}) is 
        const count = get(countAtom) // get the value of the countAtom
        return count % 2 === 0
    }
})