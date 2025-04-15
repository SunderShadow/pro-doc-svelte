import {authByGoogle} from "$api/local-server"
import {fetchDataFromServer} from "$lib/storage/auth"
import {goto} from "$app/navigation"

export const ssr = false
export const load = async ({url}) => {
    authByGoogle(url.searchParams.toString())
        .then(() => {
            fetchDataFromServer().then(() => {
                goto('/account')
            })
        })
        .catch(r => {
            console.log(r)
        })
}