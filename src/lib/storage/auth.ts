import {get, writable} from "svelte/store"
import type {User} from "$lib/types"
import {getUserData, logout as logoutRequest} from "$api/local-server"

const store = writable<User|undefined>()

export default store

export const logout = () => {
    logoutRequest().then(() => {
        store.set(undefined)
    })
}

export const fetchDataFromServer = () => {
    return getUserData().then(data => {
        store.set(data)
    }).catch(err => {
        if (err.response.status === 401) {
            store.set(undefined)
        }
    })
}