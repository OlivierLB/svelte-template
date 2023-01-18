import { writable } from "svelte/store";

const store = () => {
    const state = {
        name: '',
        id: 0,
        token: ''
    }

    const { subscribe, set, update } = writable(state);

    const methods = {
        setToken (data :string) {
            update(state => ({
                ...state,
                token: data
            }))
        }
    }

    return {
        subscribe,
        ...methods
    }
}

export default store()
