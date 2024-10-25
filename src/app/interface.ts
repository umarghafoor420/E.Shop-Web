export interface simplifiedproducts{
    _id:string;
    imageUrl:string;
    price:number;
    Slug:string;
    CategoryName:string;
    name:string;

}

export  interface fullProduct{
    _id:string;
    images:any;
    price:number;
    Slug:string;
    CategoryName:string;
    name:string;
    description:string;
    price_id:string;
}