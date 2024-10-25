import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'csbbbfl5',
  dataset:'production',
  apiVersion:'2022-03-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});