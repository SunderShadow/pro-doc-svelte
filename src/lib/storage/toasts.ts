import {writable} from "svelte/store"
import type {Toast} from "$lib/types"

type StorageToast = {
    type: Toast['type'],
    message: string
}

const store = writable<StorageToast[]>([])

export default store

/**
 * @param type
 * @param message
 * @param lifetime milliseconds
 */
export const show = async (type: Toast['type'], message: string, lifetime: number = 2000) => {
    store.update(st => {
        let i = st.push({
            type,
            message
        })

        let toast = st[i - 1]

        setTimeout(() => {
            store.update(st => {
                st.splice(st.findIndex(i => i === toast), 1)
                return st
            })
        }, lifetime)

        return st
    })
}