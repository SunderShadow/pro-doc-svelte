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

    export type Home = {
        slider: Array<{
            desktop: string, // Img
            mobile: string,  // Img
            title: string,
            description: string
        }>,
        qa: Array<{
            title: string,
            description: string
        }>
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

export namespace DocPro {
    export type City = {
        Alias: string,
        HasDiagnostic: boolean,
        Id: string,
        Latitude: string,
        Longitude: string,
        Name: string,
        Phone: null,
        RegistryCityId: number,
        SearchType: number,
        TimeZone: number
    }

    export type Service = {
        Id: string,
        Name: string,
        Lft: string,
        Rgt: string,
        Depth: string,
        SectorId: string,
        DiagnosticaId: string,
        HasMinTariff: boolean,
        IsReceptionRequired: boolean
    }

    export type Speciality = {
        Alias: string,
        BranchAlias: string,
        BranchName: string,
        Id: string,
        KidsReception: 1 | 2,
        IsSimple: true,
        Name: string,
        NameGenetive: string,
        NamePlural: string,
        NamePluralGenitive: string
    }
}