import { groq } from 'next-sanity';

import { Experience, PageInfo, Project, Skill, Social } from '@/typings';

import { sanityClient } from './lib/client';

export async function getExperiences(): Promise<Experience[]> {
  const experiencesQuery = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `;

  return sanityClient.fetch(experiencesQuery);
}

export async function getPageInfo(): Promise<PageInfo> {
  const pageInfoQuery = groq`
    *[_type == "pageInfo"][0] {
      ...,
      socials[]->
    }
  `;

  return sanityClient.fetch(pageInfoQuery);
}

export async function getProjects(): Promise<Project[]> {
  const projectsQuery = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
  `;

  return sanityClient.fetch(projectsQuery);
}

export async function getSkills(): Promise<Skill[]> {
  const skillsQuery = groq`
    *[_type == "skill"]
  `;

  return sanityClient.fetch(skillsQuery);
}

export async function getSocials(): Promise<Social[]> {
  const socialsQuery = groq`
    *[_type == "social"]
  `;

  return sanityClient.fetch(socialsQuery);
}
