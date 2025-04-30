import {browser} from "$app/environment"
import {fetchDataFromServer} from "$lib/storage/auth"
import {getCSRFCookie, getHomePageLayout} from "$api/local-server";

let fetched = false
export const load = async ({data}) => {
    if (browser) {
        if (!fetched) {
            getCSRFCookie().then(() => {
                fetchDataFromServer().catch(res => {

                }).then(() => {
                    fetched = true
                })
            })
        }

        return Promise.resolve(data)
    }

    return data
}
