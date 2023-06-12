import { client } from "./sanity"


export async function getFeaturedResturants () {
    const posts = await client.fetch(
        `
        *[_type == 'featured'] {
            ...,
            resturants[]->{
            ...,
            type->{
                name
            },
            dishes[]->
            }
        }
     `
    )
    return posts
}





// export const getFeaturedResturants = ()=>{
//     return sanityQuery(`
//         *[_type == 'featured'] {
//             ...,
//             resturants[]->{
//             ...,
//             type->{
//                 name
//             },
//             dishes[]->
//             }
//         }
//     `);
// }




