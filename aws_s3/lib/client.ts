import { S3Client } from '@aws-sdk/client-s3';

import {
  awsBucketRegion,
  awsBucketAccessKeyId,
  awsBucketSecretAccessKey,
} from '../env';

export const s3Client = new S3Client({
  credentials: {
    accessKeyId: awsBucketAccessKeyId,
    secretAccessKey: awsBucketSecretAccessKey,
  },
  region: awsBucketRegion,
});
