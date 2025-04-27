import type {Blog, Layout, User} from "$lib/types"

import {PUBLIC_LOCAL_SERVER_BASE_URL} from "$env/static/public"
import axios from "axios"
import {browser} from "$app/environment";
import {fetchDataFromServer} from "$lib/storage/auth";

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

export const authEmailCodeLogin = (email: string, code: string) => {
    return new Promise(res => {
        getCSRFCookie().then(() => {
            res(authClient.post('/api/auth/email/login/code', {
                email, code
            }))
        })
    })
}

export const authEmailCodeRegister = (email: string, code: string) => {
    return new Promise(res => {
        getCSRFCookie().then(() => {
            res(authClient.post('/api/auth/email/register/code', {
                email, code
            }).then(r => {
                return r
            }))
        })
    })
}

export const authEmailCodeSend = (email: string) => {
    return authClient.post('/api/auth/email/login', {
        email
    }).then(res => res.data)
}

export const authSMS2fa = (phone: string) => {
    return authClient.post('/api/auth/sms/code/send', {
        phone
    })
}

export const authSMSCodeLogin = (phone: string, code: string) => {
    return new Promise(res => {
        getCSRFCookie().then(() => {
            res(authClient.post('/api/auth/sms/login/code', {
                phone, code
            }))
        })
    })
}

export const authSMSCodeRegister = (phone: string, code: string) => {
    return new Promise(res => {
        getCSRFCookie().then(() => {
            res(authClient.post('/api/auth/sms/register/code', {
                phone, code
            }))
        })
    })
}

export const authSMSCodeSend = (phone: string) => {
    return authClient.post('/api/auth/sms/code/send', {
        phone
    }).then(res => res.data)
}

export const authByGoogle = (queryParams: string) => {
    return authClient.get<string>('/api/auth/google?' + queryParams).then(r => r.data.token)
        .then(token => {
            setAuthToken(token)
        })
}

export const updateUserData = (data: User) => {
    return authClient.postForm('/api/user/info', data).then(r => r.data).then(data => {
        fetchDataFromServer()
        return data
    });
}

export const updateUserEmail = (email: string, code: string) => {
    return authClient.postForm('/api/user/info/email', {
        email, code
    })
        .then(r => r.data)
        .then(data => {
            fetchDataFromServer()
            return data
        });
}

export const updateUserPhone = (email: string, code: string) => {
    return authClient.postForm('/api/user/info/phone', {
        email, code
    })
        .then(r => r.data)
        .then(data => {
            fetchDataFromServer()
            return data
        });
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