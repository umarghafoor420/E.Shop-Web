import { off, title } from "process";

export default {
    name: "Product",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of Products",
        },
        {
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{ type: "image" }],
        },
        {
            name: "description",
            type: "text",
            title: "Product Description"
        },
        {
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "name",

            },

        },
        {
            name: "price",
            type: "number",
            title: "Product Price"
        },
        {
             name:'price_id',
             title:'Stripe  Price ID',
             type:"string"
        },
        {
            name: "category",
            type: "reference",
            title: "Product Category",
            to: [{
                type: "category"
            }]
        }
    ]
}