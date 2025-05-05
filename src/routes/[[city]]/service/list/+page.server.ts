import {getServiceList} from "$api/doc-pro";

export const load = () => {
    return getServiceList().then(data => ({
        serviceList: data
    }))
}