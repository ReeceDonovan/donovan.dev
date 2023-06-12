import { createClient } from 'next-sanity';

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityUseCdn,
} from '../env';

export const sanityClient = createClient({
  apiVersion: sanityApiVersion,
  dataset: sanityDataset,
  projectId: sanityProjectId,
  useCdn: sanityUseCdn,
});
