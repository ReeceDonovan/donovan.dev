import { listBucketObjects } from '@/aws_s3/utils';
import Image from 'next/image';

// Create types for the data we'll receive from the API
type GalleryImage = {
  url: string;
  alt: string;
};
export default async function Gallery() {
  const data = await listBucketObjects();

  const images: GalleryImage[] | undefined = data?.map((image) => ({
    url: image.Key!,
    alt: image.Key!,
  }));

  return (
    <div className='columns-2 md:columns-3 lg:columns-4 gap-2 w-[calc(100dvw * 0.8)] mx-auto p-10 grid-flow-row-dense'>
      {images?.map((image: GalleryImage) => (
        <div className='grid-element w-full h-full' key={image.url}>
          <Image
            src={`https://${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DOMAIN}/${image.url}`}
            alt={image.alt}
            className='w-full h-fit mb-2'
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
