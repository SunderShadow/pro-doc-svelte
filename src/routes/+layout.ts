import {browser} from "$app/environment"
import {fetchDataFromServer} from "$lib/storage/auth"
import {getCSRFCookie} from "$api/local-server";

let fetched = false
export const load = async ({data}) => {
    if (browser) {
        getCSRFCookie().catch(() => {})

        if (!fetched) {
            fetchDataFromServer().catch(res => {

            }).then(() => {
                fetched = true
            })
        }

        return Promise.resolve(data)
    }

    return data
}
