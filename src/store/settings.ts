import { writable } from "svelte/store";

const store = () => {
    const state = {
        height: 0,
        width: 0,
    }

    const { subscribe, update } = writable(state);

    const methods = {
        setHeight (data :number) {
            update(state => ({
                ...state,
                height: data,
            }))
        },
        setWidth (data :number) {
            update(state => ({
                ...state,
                width: data,
            }))
        }
    }

    return {
        subscribe,
        ...methods
    }
}

export default store()
