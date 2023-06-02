// Experience
// PageInfo
// Project
// Skill
// Social

interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Experience extends SanityBase {
  _type: 'experience';
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentPosition: boolean;
  technologies: Skill[];
  points: string[];
}

export interface PageInfo extends SanityBase {
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePicture: Image;
  phoneNumber: string;
  email: string;
  address: string;
  socials: Social[];
}

export interface Project extends SanityBase {
  _type: 'project';
  title: string;
  image: Image;
  summary: string;
  technologies: Skill[];
  linkToProject: string;
}

export interface Skill extends SanityBase {
  _type: 'skill';
  title: string;
  progress: number;
  image: Image;
}

export interface Social extends SanityBase {
  _type: 'social';
  title: string;
  url: string;
}
