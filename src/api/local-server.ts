import type {Blog, Layout, User} from "$lib/types"

import {PUBLIC_LOCAL_SERVER_BASE_URL} from "$env/static/public"
import axios from "axios"
import {browser} from "$app/environment";

export const authClient = axios.create({
    baseURL: PUBLIC_LOCAL_SERVER_BASE_URL + '/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})


export const logout = () => {
    return authClient.get('/api/auth/logout')
}

const setAuthToken = (token: string) => {
    localStorage.setItem('sanctum-token', token)
    authClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

if (browser) {
    const token = localStorage.getItem('sanctum-token')

    if (token) {
        setAuthToken(token)
    }
}

export const GOOGLE_AUTH_URL = PUBLIC_LOCAL_SERVER_BASE_URL + '/api/auth/google/redirect'
export const VK_AUTH_URL = PUBLIC_LOCAL_SERVER_BASE_URL + '/api/auth/vkontakte/redirect'

export const apiClient = axios.create({
    baseURL: PUBLIC_LOCAL_SERVER_BASE_URL + '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

export type getAdviceListResponseData = {
    total: number,
    list: Blog.Advice[]
}

export const getCSRFCookie = () => {
    return authClient.get('/sanctum/csrf-cookie')
}

export const authEmailCodeVerify = (email: string, code: string) => {
    return authClient.post('/api/auth/email/login/code/verify', {
        email, code
    }).then(r => {
        getCSRFCookie()

        return r
    })
}

export const authEmailLogin = (email: string, password: string) => {
    return authClient.post('/api/auth/email/login', {
        email, password
    })
}

export const authSMSCodeSend = (phone: string) => {
    return authClient.post('/api/auth/sms/send', {
        phone
    })
}

export const authSMSCodeVerify = (phone: string, code: string) => {
    return authClient.post('/api/auth/sms/verify', {
        phone, code
    })
}

export const authByGoogle = (queryParams: string) => {
    return authClient.get<string>('/api/auth/google?' + queryParams).then(r => r.data.token)
        .then(token => {
            setAuthToken(token)
        })
}

export const updateUserData = (data: FormData) => {
    return authClient.postForm('/api/user/info', data).then(r => r.data);
}

export const getUserData = () => {
    return authClient.get('/api/user/info').then(r => r.data);
}

export const getPageMeta = (uri: string) => {
    return apiClient.get<string>('/page/meta', { params: {uri} }).then(r => r.data.meta)
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