import { writable } from "svelte/store";
import type {btnType, modalClasses} from "../utils/enums";

const store = () => {
    const state = {
        type: '',
        title: '',
        customClass: '',
        actions: [{}],
        isOpen: false
    }

    const { subscribe, update } = writable(state);

    const methods = {
        openModal (data: {
            type :string;
            title :string;
            customClass :modalClasses;
            actions :Array<{ type :btnType, label :string, action :Function }>;
        }) {
            update(state => ({
                ...state,
                type: data.type,
                title: data.title,
                customClass: data.customClass,
                actions: data.actions ?? [],
                isOpen: true
            }))
        },
        closeModal() {
            update(state => ({
                ...state,
                type: '',
                title: '',
                customClass: '',
                actions: [],
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
