import {browser} from "$app/environment"
import {fetchDataFromServer} from "$lib/storage/auth"
import {getCSRFCookie } from "$api/local-server"

import cities, {currentCity, setCurrentCity, setupCurrentCity} from "$lib/storage/cities"
import {get} from "svelte/store";
import {redirect} from "@sveltejs/kit";
import {goto} from "$app/navigation";

let fetched = false
export const load = async ({data, params, url}) => {
    cities.set(data.cities.sort((a, b) => a.Name.localeCompare(b.Name)))

    if (!params.city && !!get(currentCity)) {
        redirect(301, '/' + get(currentCity).Alias + url.pathname)
    }

    if (params.city) {
        currentCity.set(data.cities.find(i => i.Alias === params.city) ?? data.cities[0])
    }

    if (browser) {
        if (!params.city) {
            setCurrentCity(data.cities.find(i => i.Alias === params.city) ?? data.cities[0])
        } else {
            setupCurrentCity()
        }

        if (!fetched) {
            getCSRFCookie().then(() => {
                fetchDataFromServer().catch(res => {

                }).then(() => {
                    fetched = true
                })
            })
        }

        if (!params.city && !!get(currentCity)) {
            goto('/' + get(currentCity).Alias + url.pathname, {
                replaceState: true
            })
        }

        return Promise.resolve(data)
    }

    return data
}
