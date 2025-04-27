export namespace Doctor {
    export type Speciality = {
        title: string,
        key: string
    }
}

export type Breadcrumbs = Array<{
    title: string,
    href: string
}>

export namespace Layout {
    export type Footer = {
        phone: string,
        vk: string,
        tg: string,
        email: string
    }
}

export namespace Blog {
    export type Tag = {
        id: number,
        name: string,
        slug: string
    }

    export type Advice = {
        id: number,
        title: string,
        excerpt: string,
        content: string,
        thumbnail: string,
        published_at: string,
        tags: string[],
        slug: string
    }
}

export type Toast = {
    type: "success" | "info" | "warning" | "error"
}

export type User = {
    avatar: File,
    name: string,
    email: string,
    gender: number|null,
    age: number,
    phone: string,
    notify_sms: boolean,
    notify_email: boolean,
}