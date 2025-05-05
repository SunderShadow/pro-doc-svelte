export const load = async ({data}) => {
    return {
        popular: data.serviceList,
        clinic: data.serviceList,
    }
}



