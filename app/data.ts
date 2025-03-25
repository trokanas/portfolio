type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Movie Farm',
    description:
      'Movie Farm allows users to quickly find and explore movies from a database of 1 million+ entries. Users can search by title, genre, release year, or cast, view detailed movie information, watch trailers, and read reviews. The app features fast search, personalized recommendations, and a user-friendly interface for seamless browsing.',
    link: 'https://movie-farm.com/',
    video:
      'https://portfoliobucket077.s3.eu-north-1.amazonaws.com/Screen+Recording+2025-03-25+at+16.25.54.mov',
    id: 'project1',
  },
  {
    name: 'KDAP Kids Athletics',
    description: 'Kids Athletics is a Centre of Creative Activities for Children, featuring a user-friendly website designed for seamless navigation. The platform highlights sports, arts, and educational programs, offering parents an easy way to explore activities, view schedules, and register online. Optimized for performance and accessibility, the site ensures a smooth experience across all devices.',
    link: 'https://kidsathletics.gr',
    video:
      'https://portfoliobucket077.s3.eu-north-1.amazonaws.com/Screen+Recording+2025-03-25+at+16.22.11.mov',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'DEI College',
    title: 'IT Administrator',
    start: '2023',
    end: 'Present',
    link: 'https://dei.edu.gr',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Web Developer',
    start: '2022',
    end: 'Present',
    link: 'https://trokanas.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/trokanas',
  },
  {
    label: 'X',
    link: 'https://x.com/trokanas1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/trokanas',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kwstastrok',
  },
  {
    label: 'LeetCode',
    link: 'https://leetcode.com/u/trokanas/',
  },
]

export const EMAIL = 'trokanas.k@outlook.com'
