import {$authHost, $host} from "./index";



export const createContact = async (contact) => {
    const {data} = await $authHost.post('api/contact', contact)
    return data
}

export const fetchContact = async () => {
    const {data} = await $host.get('api/contact')
    return data
}
