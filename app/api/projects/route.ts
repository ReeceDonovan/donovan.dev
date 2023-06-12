import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { sanityClient } from '@/sanity/lib/client';
import { Project } from '@/typings';

export async function GET() {
  const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
  `;

  const projects: Project[] = await sanityClient.fetch(query);

  return NextResponse.json({ projects });
}
