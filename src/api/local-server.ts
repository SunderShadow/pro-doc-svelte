import type {Blog, Layout} from "$lib/types"

import {PUBLIC_LOCAL_SERVER_API_BASE_URL} from "$env/static/public"
import axios from "axios"

const apiClient = axios.create({
    baseURL: PUBLIC_LOCAL_SERVER_API_BASE_URL,
})

export type getAdviceListResponseData = {
    total: number,
    list: Blog.Advice[]
}

export const getPageFooterLayout = () => {
    return apiClient.get<Layout.Footer>('/page/layout/footer').then(r => r.data)
}

export const getAdviceSingle =  (slug: string) => {
    return apiClient.get<Blog.Advice>('/advice/single/' + slug).then(r => r.data)
}

export const getAdviceList =  (offset: number, count: number, tag?: Blog.Tag['slug']) => {
    return apiClient.get<getAdviceListResponseData>('/advice/list', {
        params: {
            tag,
            offset, count
        }
    }).then(r => r.data)
}

export const getAdviceTags =  () => {
    return apiClient.get<Blog.Tag[]>('/advice/tags').then(r => r.data)
}