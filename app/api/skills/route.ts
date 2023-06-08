import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { sanityClient } from '@/sanity/lib/client';
import { Skill } from '@/typings';

export async function GET() {
  const query = groq`*[_type == "skill"]`;

  const skills: Skill[] = await sanityClient.fetch(query);

  return NextResponse.json({ skills });
}
