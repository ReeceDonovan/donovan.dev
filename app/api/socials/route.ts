import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { client } from '@/sanity/lib/client';
import { Social } from '@/typings';

export async function GET() {
  const query = groq`*[_type == "social"]`;

  const socials: Social[] = await client.fetch(query);

  return NextResponse.json({ socials });
}
