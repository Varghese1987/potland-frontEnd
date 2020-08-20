export class Product {
    id: any;
    name: string;
    shortDesc: string;
    longDesc: string;
    price:number;
    imgUrl:string;

    constructor(id,name,shortDesc='',longDesc='',price=0,imgUrl='https://c.wallhere.com/photos/79/5c/muscari_cornflowers_flowers_purple_composition_close_up-712327.jpg!d'){
        this.id = id
        this.name = name
        this.shortDesc = shortDesc
        this.longDesc = longDesc
        this.price = price
        this.imgUrl = imgUrl
    }
}
