"use client"
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
export interface productCart{
       
      name:string
      price:number
      description:string
      currency:string
      image:any
      price_id:string

}

export default function  AddToCart({currency,image,description,name,price,price_id}:productCart){
    const {addItem,handleCartClick} = useShoppingCart();
    const product={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id

    }
    return(
       <Button onClick={()=>{
        addItem(product), handleCartClick();
       }}>Add To Cart</Button>
    )
    
}