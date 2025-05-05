import {getPageFooterLayout, getPageMeta} from "$api/local-server"
import {getCitiesList} from "$api/doc-pro"

export const load = async ({url}) => {
    // TODO: make multiplex

    return {
        cities: await getCitiesList(),
        meta:   await getPageMeta(url.pathname).catch(r => r.status === 404 ? '' : ''),
        footer: await getPageFooterLayout()
    }
}
