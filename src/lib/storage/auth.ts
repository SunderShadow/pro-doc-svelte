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
    if (get(store)) {
        return Promise.resolve()
    }

    return getUserData().then(data => {
        store.set(data)
    })
}