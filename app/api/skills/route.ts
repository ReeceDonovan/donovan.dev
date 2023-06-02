import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

import { client } from '@/sanity/lib/client';
import { Skill } from '@/typings';

export async function GET() {
  const query = groq`*[_type == "skill"]`;

  const skills: Skill[] = await client.fetch(query);

  return NextResponse.json({ skills });
}
