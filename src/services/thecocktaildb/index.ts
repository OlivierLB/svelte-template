import {methodTypes} from "../../utils/enums";

const API_URL :string = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

export function get(url :string) {
    return fetch(`${API_URL}${url}`, {
        method: methodTypes.get
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export function post(url :string, data :object) {
    return fetch(`${API_URL}${url}`, {
        method: methodTypes.post,
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}
