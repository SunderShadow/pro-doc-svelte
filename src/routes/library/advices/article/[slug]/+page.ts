type PageData = {
    date: Date,
    title: string,
    thumbnail: string
}

export const load = (): PageData => {
    return {
        date: new Date(),
        title: 'Какой у вас холестерин?',
        thumbnail: '/article-thumbnail-stub.jpeg',
    }
}