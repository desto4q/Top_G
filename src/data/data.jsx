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



let createRandomDetails = () => {
    let randomName = {
        fullname: faker.person.fullName(),
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        image: faker.image.urlLoremFlickr({ category: "abstract" }),
        rating: faker.number.float({ max: 5, precision: 0.1 }),
        product_name: faker.commerce.product(),
        price: faker.commerce.price()

    }

    return randomName
}



export const Personel = faker.helpers.multiple(createRandomDetails, { count: 6 })


let Artist = () => {
    let artist = {
        fullname: faker.person.fullName(),
        avatar: faker.internet.avatar(),
        userName: faker.internet.userName(),
        bg: faker.image.urlLoremFlickr({ category: "abstract" }),
        items: faker.number.float({ max: 5, precision: 0.1 }),
        owners: faker.number.float({ max: 5, precision: 0.1 }),
        traded: faker.number.float({ max: 5, precision: 0.1 }),

    }
    return artist
}


export let explore = {
    h2: "Enviromental Impact of NFTs.",
    p: "NFT's give us a way to have a clear ownership over digital items. Consider how they are the same and different from a physical object",
    buttons: [
        {
            name: "Explore Now",
            type: ""
        }

    ]
}


export const Artist_list = faker.helpers.multiple(Artist, { count: 20 })


export let footer_content = [
    {
        title: "Resources",
        tile: [
            "All Nfs",
            "Customize",
            "Utilize",
            "Connect Wallet"]
    },
    {
        title: "Company",
        tile: [
            "Help Center",
            "Terms of Service",
            "Privacy Policy"
        ]
    },
]