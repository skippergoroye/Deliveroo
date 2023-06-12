import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'npcegap4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

