import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { sanityClient } from '@/sanity/lib/client';
import { PageInfo } from '@/typings';

export async function GET() {
  const query = groq`*[_type == "pageInfo"][0] {
    ...,
    socials[]->
  }
  `;

  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return NextResponse.json({ pageInfo });
}
