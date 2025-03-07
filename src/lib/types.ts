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

export type Tag = {
    title: string,
    key: string
}