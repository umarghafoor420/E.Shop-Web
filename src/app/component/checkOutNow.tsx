"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { productCart } from "./AddTocart";
import { urlFor } from "@/sanity/lib/image";

export default function  CheckOut({currency,image,description,name,price,price_id}:productCart){
    const {checkoutSingleItem} = useShoppingCart();
    function buyNow(price_Id:string){
        checkoutSingleItem(price_Id)
    }
    const product={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image:urlFor(image).url(),
        price_id: price_id,

    }
    return(
       <Button onClick={()=>{
        buyNow(product.price_id)
       }}>CheckOut Now</Button>
    )
    
}