import auth, {fetchDataFromServer} from "$lib/storage/auth"
import {get} from "svelte/store"
import {goto} from "$app/navigation"

export const ssr = false

export const load = () => {
    return new Promise<void>(resolve => {
        if (!get(auth)) {
            fetchDataFromServer()
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    resolve()
                    goto('/')
                })
        } else {
            resolve()
        }
    })
}