import {get, writable} from "svelte/store"
import type {DocPro} from "$lib/types"

type Storage = Array<DocPro.City>

const storage= writable<Storage>([])

export default storage

export let currentCity = writable<DocPro.City|null>()

export function setCurrentCity(city: DocPro.City) {
    currentCity.set(city)

    localStorage.setItem('current-city', JSON.stringify({
        Id: city.Id,
        Name: city.Name,
    }))
}

export function setupCurrentCity() {
    let localstorageRecord = localStorage.getItem('current-city')

    const cities = get(storage)

    if (!localstorageRecord) {
        setCurrentCity(cities[0])
    } else {
        let cityId = JSON.parse(localstorageRecord).Id
        setCurrentCity(cities.find(i => i.Id === cityId)!)
    }
}