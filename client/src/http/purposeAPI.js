import {$authHost, $host} from "./index";



export const createPurpose = async (purpose) => {
    const {data} = await $authHost.post('api/purpose', purpose)
    return data
}

export const fetchPurposes = async () => {
    const {data} = await $host.get('api/purpose')
    return data
}

export const fetchOnePurpose = async (id) => {
    const {data} = await $host.get('api/purpose/' + id)
    return data
}