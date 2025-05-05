import type {DocPro} from "$lib/types"

import axios from "axios";
import {PUBLIC_DOC_PRO_API_BASE_URL} from "$env/static/public"

import {currentCity} from "$lib/storage/cities"
import {get} from "svelte/store";

const client = axios.create({
    baseURL: PUBLIC_DOC_PRO_API_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default client

export function getCitiesList() {
    return client.get('city').then(res => res.data.CityList)
}

type GetServiceListResponse = {
    Total: string,
    ServiceList: Array<DocPro.Service>
}

export function getServiceList() {
    return client.get<GetServiceListResponse>('service/list').then(res => res.data.ServiceList)
}

export function getSpecialities() {
    const cityId = get(currentCity).Id

    return client.get<{SpecList: Array<DocPro.Speciality>}>('speciality/city/' + cityId + '/onlySimple/0')
        .then(res => res.data.SpecList)
}
