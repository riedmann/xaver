import { useState } from "react"

export const useArrayState = (initialState: any = []) => {
    const [state, setState] = useState(initialState);

    const add = (newValue: any) => {
        setState((currentState: any) => [...currentState, newValue]);
    };

    const remove = (index: number) => {
        setState((currontState: any) => {
            const newState = [...currontState];
            newState.splice(index, 1);
            return newState;
        })
    }

    return [state, {add, remove}]
}