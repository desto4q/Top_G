import { faker } from "@faker-js/faker"




export let hero = {
    h2: "Discover Collect and Sell Extraodirnary NFT Art",
    p: "NFTs are just like baseball cards and autographed merchand They ara rare, tradeable,and collectible involved in the NFT market",
    buttons: [
        {
            name: "Explore Now",
            type: ""
        },
        {
            name: "Watch Now",
            type: ""
        }
    ]
}


export let sect2 = {
    h2: "NFTs can be attached to specific Digital Files",
    p: "You might be Into NFTS,but Most Likely your instagram follwers arent. You will have to make them fall in love  with your collection. Using captions would be great way to do that",
    buttons: [
        {
            name: "Place A Bid",
            type: ""
        },
        {
            name: "View Art",
            type: ""
        }
    ]

}



let createRandomDetails = ( )=> {
    let randomName = {
        fullname: faker.person.fullName(),
        username: faker.internet.userName(),
        avatar:  faker.internet.avatar(),
        image: faker.image.urlLoremFlickr({category: "abstract"}),
        rating : faker.number.float({max:5,precision: 0.1}),
        product_name: faker.commerce.product(),
        price: faker.commerce.price()

    }
    
    console.log(randomName)
    return randomName
}


export const Personel = faker.helpers.multiple(createRandomDetails, {count:6})
