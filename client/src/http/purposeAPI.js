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

export const deleteOnePurpose = async (id) => {
    const {data} = await $authHost.delete('api/purpose/' + id)
    return data
}

export const updateOnePurpose = async (id, purpose) => {
    const {data} = await $authHost.put('api/purpose/' + id, purpose)
    return data
}