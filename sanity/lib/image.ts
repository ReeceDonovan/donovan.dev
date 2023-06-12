import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { sanityDataset, sanityProjectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId || '',
  dataset: sanityDataset || '',
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};
