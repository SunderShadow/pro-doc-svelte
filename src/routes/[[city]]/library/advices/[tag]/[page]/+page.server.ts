import type {Blog} from "$lib/types"
import * as localServerAPI from "$api/local-server"

export type Article = {
    thumbnail: string,
    title: string,
    excerpt: string,
    slug: string
}

type Params = {
    tag: string,
    tags: Blog.Tag[],
    pagination: {
        total: number,
        page: number
    },
    articles: Blog.Advice[]
}

export const load = async function ({params}): Params {
    const perPage = 2

    let tag: string|undefined = params.tag

    if (tag === 'all') {
        tag = undefined
    }
    const page = Number(params.page)

    const from = (page - 1) * perPage

    const paginatedArticles = await localServerAPI.getAdviceList(from, perPage, tag)
    const articles = paginatedArticles.list
    const total = paginatedArticles.total

    const tags = await localServerAPI.getAdviceTags()

    return {
        tag: params.tag,
        pagination: {
            total: Math.ceil(total / perPage),
            page
        },
        tags,
        articles
    }
}