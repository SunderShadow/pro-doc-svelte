type Params = {
    slug: string,
    title: string
}
export const load = ({params}): Params => {
    return {
        slug: params.slug,
        title: 'Университетская клиника неврологии'
    }
}