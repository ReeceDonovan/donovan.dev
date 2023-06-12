import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { sanityClient } from '@/sanity/lib/client';
import { Social } from '@/typings';

export async function GET() {
  const query = groq`*[_type == "social"]`;

  const socials: Social[] = await sanityClient.fetch(query);

  return NextResponse.json({ socials });
}
