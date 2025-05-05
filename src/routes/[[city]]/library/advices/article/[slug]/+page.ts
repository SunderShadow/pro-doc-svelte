import {getAdviceSingle} from "$api/local-server";
import {error} from "@sveltejs/kit";

type PageData = {
    date: Date,
    title: string,
    thumbnail: string,
    content: string
}

export const load = async ({params}): PageData => {
    const data = await getAdviceSingle(params.slug).catch(err => {
        error(err.status)
    })

    const date = new Date
    date.setTime(Date.parse(data.published_at))
    return {
        date,
        title: data.title,
        thumbnail: data.thumbnail,
        content: data.content
    }
}