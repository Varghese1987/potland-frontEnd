export class Product {
    id: number;
    name: string;
    description: string;
    price:number;
    imgUrl:string;

    constructor(id,name,description='',price=0,imgUrl='https://c.wallhere.com/photos/79/5c/muscari_cornflowers_flowers_purple_composition_close_up-712327.jpg!d'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }
}
