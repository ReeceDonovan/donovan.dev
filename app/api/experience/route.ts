import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { client } from '@/sanity/lib/client';
import { Experience } from '@/typings';

export async function GET() {
  const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `;

  const experiences: Experience[] = await client.fetch(query);

  return NextResponse.json({ experiences });
}
