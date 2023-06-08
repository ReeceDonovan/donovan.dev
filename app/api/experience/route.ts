import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { sanityClient } from '@/sanity/lib/client';
import { Experience } from '@/typings';

export async function GET() {
  const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `;

  const experiences: Experience[] = await sanityClient.fetch(query);

  return NextResponse.json({ experiences });
}
