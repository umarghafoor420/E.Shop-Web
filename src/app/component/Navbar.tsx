"use client"
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {ShoppingBag} from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";
const link = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },


]
function Navbar() {
  const pathname = usePathname()
const {handleCartClick} = useShoppingCart()

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className=" text-2xl md:text-4xl font-bold">E.<span className="text-purple-600">Shop</span>
          </h1></Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {link.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link className="text-lg font-bold text-purple-600" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link href={link.href} className="text-lg  font-bold text-gray-500 transition duration-100 hover:text-purple-600">
                  {link.name}
                </Link>

              )}

            </div>

          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
            <Button 
            variant={"outline"}
            onClick={()=>handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20  md:h-24 md:w-24 rounded-none">
            <ShoppingBag />
            <span className=" hidden text-xs  font-semibold text-gray-600 sm:block">
              Cart 
            </span>
            </Button>
      
        </div>
      </div>
    </header>
  );
}

export default Navbar;