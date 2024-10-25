
import AddToCart from "@/app/component/AddTocart";
import CheckOut from "@/app/component/checkOutNow";
import ImageGallery from "@/app/component/imageGallery";
import { fullProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client"
import { Star, Truck } from "lucide-react";
async function getData(Slug:string){
    const query =`*[_type == "Product" && slug.current == "${Slug}"][0]{
  _id,
  price,
  name,
  images,
  description, 
  "slug":slug.current,
  "CategoryName":category->name,
  price_id
}`;

    const data = await client.fetch(query);
    return data
}

export default async function ProductPage({params,}:{params:{Slug:string};}){
    const data:fullProduct = await  getData(params.Slug)
    return(
        <div className="bg-white">
            <div className="mx-auto  max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
             <ImageGallery images={data.images}/>
             <div className="md:py-8">
                <div className="mb-1 md:mb-3">
                    <span className="mb-0.5 inline-block text-gray-500">{data.CategoryName}</span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                </div>
                <div className="mb-6 flex items-center gap-3 md:mb-10">
                    <Button className="rounded-full gap-1.5">
                        <span className="text-sm">4.2</span>
                        <Star  className="h-5 w-5"/>
                    </Button>
                    <span className="text-sm text-gray-500 transition duration-100">56 Rating</span>
                </div>
                <div className="mb-4">
                    <div className="flex items-end gap-4">
                        <span className="text-xl font-bold text-gray-700 md:text-2xl">${data.price}</span>
                        <span className="mb-0.5 text-red-500 line-through">
                            ${data.price + 201}
                        </span>
                    </div>
              <span className="text-sm text-gray-500">Incl. Vat Plus Shipping </span>

                </div>
                <div className="mb-6 flex items-center gap-2 text-gray-500">
                    <Truck  className="h-6 w-6"/>
                    <span className="text-sm">2-4 Days Shipping</span>
                </div>
                <div className="flex gap-2.5">
                
              <AddToCart
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckOut
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}/>
                </div>
                <p className="mt-12 text-base text-gray-600 tracking-wide">{data.description}</p>
             </div>
                </div>
            </div>
        </div>
    )
}