import { s3Client } from '@/aws_s3/lib/client';
import { awsBucketName } from '@/aws_s3/env';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

export async function listBucketObjects() {
  const command = new ListObjectsCommand({
    Bucket: awsBucketName,
  });

  const response = await s3Client.send(command);

  return response.Contents;
}
