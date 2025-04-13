import {getPageFooterLayout, getPageMeta} from "$api/local-server"

export const load = async ({url}) => {
    return {
        meta: await getPageMeta(url.pathname).catch(r => r.status === 404 ? '' : ''),
        footer: await getPageFooterLayout()
    }
}
