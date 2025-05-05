import {getHomePageLayout} from "$api/local-server"

export const load = async () => {
    return getHomePageLayout().catch(res => null)
}