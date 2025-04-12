import {getPageFooterLayout} from "$api/local-server"

export const load = async () => {
    return {
        footer: await getPageFooterLayout()
    }
}
