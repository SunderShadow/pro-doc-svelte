import {getCSRFCookie} from "$api/local-server";

export const load = async () => {
    return getCSRFCookie()
}