import Image from "next/image";
import { client } from "@/sanity/lib/client"
import { simplifiedproducts } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import product from "@/sanity/schemaTypes/product";

async function getData() {
    const query =`*[_type == "Product"][0...4] | order(_createdAt desc){
 _id,
    price,
    name,
   "Slug":slug.current,
   "CategoryName":category->name,
   "imageUrl":images[0].asset->url
}`
    const data=await client.fetch(query);
    return data;
}
export default async function Newest(){
       const data:simplifiedproducts[]=await getData()

  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-4 px-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-18">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Newest Products</h2> 
          <Link href={"/all"} className="text-purple-500  flex items-center gap-x-1">See all{""}
          <span><ArrowRight/></span></Link>

        </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <div key={product._id} className="group relative">

            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Image  src={product.imageUrl} alt="Product Image"  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
              width={300} 
              height={300} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 font-bold">
                  <Link href={`/product/${product.Slug}`}>
                  {product.name}</Link>
                </h3>
                <p>{product.CategoryName}</p>
              </div>
              <p className="text-sm font-bold text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}

      </div>

      </div>
    </div>
  )

}