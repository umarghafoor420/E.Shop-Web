import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import heroimage from './heroimage'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,heroimage],
}


export default  schema;