export const awsBucketName = assertValue(
  process.env.AWS_BUCKET_NAME,
  'Missing environment variable: AWS_BUCKET_NAME'
);

export const awsBucketRegion = assertValue(
  process.env.AWS_BUCKET_REGION,
  'Missing environment variable: AWS_BUCKET_REGION'
);

export const awsBucketAccessKeyId = assertValue(
  process.env.AWS_BUCKET_ACCESS_KEY_ID,
  'Missing environment variable: AWS_BUCKET_ACCESS_KEY_ID'
);

export const awsBucketSecretAccessKey = assertValue(
  process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
  'Missing environment variable: AWS_BUCKET_SECRET_ACCESS_KEY'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
