import {$authHost, $host} from "./index";



export const createContact = async (contact) => {
    const {data} = await $host.post('api/contact', contact)
    return data
}

export const fetchContact = async () => {
    const {data} = await $authHost.get('api/contact')
    return data
}

export const deleteOneContact = async (id) => {
    const {data} = await $authHost.delete('api/contact/' + id)
    return data
}
