import auth, {fetchDataFromServer} from "$lib/storage/auth"
import {get} from "svelte/store"
import {goto} from "$app/navigation"
import {browser} from "$app/environment"

export const load = () => {
    if (browser) {
        return new Promise(resolve => {
            if (get(auth)) {
                resolve(null)
            }

            fetchDataFromServer()
                .then(() => {
                    resolve({})
                })
                .catch(() => {
                    goto('/')
                })
        })
    }

    return Promise.resolve()
}