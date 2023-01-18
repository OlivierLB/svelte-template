import { writable } from "svelte/store";

const store = () => {
    const state = {
        type: '',
        title: '',
        customClass: '',
        isOpen: false
    }

    const { subscribe, set, update } = writable(state);

    const methods = {
        openModal (data: { type :string; title :string; customClass :string; }) {
            update(state => ({
                ...state,
                type: data.type,
                title: data.title,
                customClass: data.customClass,
                isOpen: true
            }))
        },
        closeModal() {
            update(state => ({
                ...state,
                type: '',
                title: '',
                customClass: '',
                isOpen: false
            }))
        }
    }

    return {
        subscribe,
        ...methods
    }
}

export default store()
