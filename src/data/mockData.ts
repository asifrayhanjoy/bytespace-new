export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview: boolean;
  isCompleted?: boolean;
  videoUrl?: string;
  description: string;
  pdfUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpfulCount: number;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  title: string;
  bio: string;
  about: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  courseCount: number;
  verified: boolean;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    youtube?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  courseCount: number;
  description: string;
  color: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewCount: number;
  commentsCount: number;
  students: number;
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice: number;
  badge: string;
  creator: Creator;
  thumbnail: string;
  description: string;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  modules: Module[];
  reviews: Review[];
}

export const MOCK_CREATORS: Record<string, Creator> = {
  'purepearl-studio': {
    id: 'purepearl-studio',
    name: 'purepearl studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    title: 'Senior Digital Design Studio & Tech Educators',
    bio: 'Creating top-tier digital assets, UI/UX systems, and full-stack web applications for global brands.',
    about: 'purepearl studio is an award-winning creative tech design studio with over 10 years of industry experience.',
    rating: 4.5,
    reviewCount: 1250,
    studentCount: 12000,
    courseCount: 16,
    verified: true,
    socials: {
      website: 'https://purepearl.design',
    },
  },
};

export const MOCK_CATEGORIES_FILTER = [
  { name: 'Featured', slug: 'featured', active: true },
  { name: 'Music', slug: 'music' },
  { name: 'Drawing & Painting', slug: 'drawing' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Animation', slug: 'animation' },
  { name: 'Social Media', slug: 'social-media' },
  { name: 'UI/UX Design', slug: 'ui-ux' },
  { name: 'Creative Marketing', slug: 'creative-marketing' },
  { name: 'Digital Illustration', slug: 'digital-illustration' },
  { name: 'Film & Video', slug: 'film-video' },
  { name: 'Crafts', slug: 'crafts' },
  { name: 'Freelance & Entrepreneurship', slug: 'freelance' },
  { name: 'Graphic Design', slug: 'graphic-design' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Productivity', slug: 'productivity' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'Cooking', slug: 'cooking' },
];

export const MOCK_CATEGORIES = MOCK_CATEGORIES_FILTER.map(c => ({
  id: c.slug,
  name: c.name,
  slug: c.slug,
  iconName: 'Code',
  courseCount: 17,
  description: 'Explore courses in ' + c.name,
  color: 'from-blue-500 to-indigo-600',
}));

export const MOCK_PATH_CATEGORIES = [
  { id: 'design', name: 'Design', icon: 'Scissors' },
  { id: 'development', name: 'Development', icon: 'Code' },
  { id: 'it-software', name: 'IT & Software', icon: 'Monitor' },
  { id: 'business', name: 'Business', icon: 'Building' },
  { id: 'marketing', name: 'Marketing', icon: 'Megaphone' },
  { id: 'photography', name: 'Photography', icon: 'Camera' },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'learn-figma-basic',
    title: 'Learn Figma from Basic',
    subtitle: 'Master wireframing, component variants, and interactive prototyping in Figma from scratch.',
    category: 'UI/UX Design',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 2600,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the core principles of UI/UX design and master Figma from the ground up.',
    whatYouWillLearn: ['Figma interface & auto-layout', 'Design token setup', 'Component variants'],
    requirements: ['No prior experience needed'],
    targetAudience: ['Beginner designers and developers'],
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Figma Essentials',
        duration: '45m',
        lessons: [
          {
            id: 'l1',
            title: '1.1 Introduction to Figma Interface',
            duration: '15m',
            isPreview: true,
            description: 'Getting familiar with Figma workspace.',
          },
        ],
      },
    ],
    reviews: [],
  },
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset',
    subtitle: 'Learn how to conceptualize, design, and launch profitable high-converting digital products.',
    category: 'UI/UX Design',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 3450,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    description: 'Structure and monetize digital design assets efficiently.',
    whatYouWillLearn: ['Building scalable digital products', 'Marketplace listing'],
    requirements: ['Basic design knowledge'],
    targetAudience: ['Creators & Designers'],
    modules: [],
    reviews: [],
  },
  {
    id: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    subtitle: 'Understand data analytics, visualization, and strategic data-driven decision making.',
    category: 'Data Science',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 1980,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Harness the potential of big data analytics for modern businesses.',
    whatYouWillLearn: ['Data analytics pipelines', 'Dashboard visualization'],
    requirements: ['Basic spreadsheet or data familiarity'],
    targetAudience: ['Analysts & Business leaders'],
    modules: [],
    reviews: [],
  },
  {
    id: 'balancing-productivity',
    title: 'Balancing Productivity an...',
    subtitle: 'Optimize work-life balance, time management, and focus techniques for remote professionals.',
    category: 'Productivity',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 1540,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    description: 'Master time-boxing and deep work habits to double your daily output.',
    whatYouWillLearn: ['Time management systems', 'Overcoming burnout'],
    requirements: ['None'],
    targetAudience: ['Freelancers, Remote workers & Entrepreneurs'],
    modules: [],
    reviews: [],
  },
  {
    id: 'mastering-money-management',
    title: 'Mastering Money Manage...',
    subtitle: 'Learn personal finance, investment strategies, and financial freedom planning.',
    category: 'Business',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 2890,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    description: 'Build a solid financial strategy for asset building and wealth growth.',
    whatYouWillLearn: ['Budgeting frameworks', 'Investment basics'],
    requirements: ['None'],
    targetAudience: ['Anyone seeking financial literacy'],
    modules: [],
    reviews: [],
  },
  {
    id: 'from-idea-to-startup',
    title: 'From Idea to Startup Succ...',
    subtitle: 'Turn your innovative business ideas into scalable, funded, and revenue-generating startups.',
    category: 'Freelance & Entrepreneurship',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 3120,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Step-by-step roadmap from MVP validation to product launch.',
    whatYouWillLearn: ['Startup validation', 'Pitch decks & fundraising'],
    requirements: ['An entrepreneurial mindset'],
    targetAudience: ['Aspiring founders'],
    modules: [],
    reviews: [],
  },
  {
    id: 'learn-figma-basic-2',
    title: 'Learn Figma from Basic',
    subtitle: 'Master wireframing, component variants, and interactive prototyping in Figma from scratch.',
    category: 'UI/UX Design',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 2600,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the core principles of UI/UX design and master Figma from the ground up.',
    whatYouWillLearn: ['Figma interface & auto-layout', 'Design token setup', 'Component variants'],
    requirements: ['No prior experience needed'],
    targetAudience: ['Beginner designers and developers'],
    modules: [],
    reviews: [],
  },
  {
    id: 'build-digital-asset-2',
    title: 'Build Digital Asset',
    subtitle: 'Learn how to conceptualize, design, and launch profitable high-converting digital products.',
    category: 'UI/UX Design',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 3450,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    description: 'Structure and monetize digital design assets efficiently.',
    whatYouWillLearn: ['Building scalable digital products', 'Marketplace listing'],
    requirements: ['Basic design knowledge'],
    targetAudience: ['Creators & Designers'],
    modules: [],
    reviews: [],
  },
  {
    id: 'the-power-of-big-data-2',
    title: 'the Power of Big Data',
    subtitle: 'Understand data analytics, visualization, and strategic data-driven decision making.',
    category: 'Data Science',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 59,
    commentsCount: 59,
    students: 1980,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    price: 25,
    originalPrice: 45,
    badge: '17 Lessons',
    creator: MOCK_CREATORS['purepearl-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Harness the potential of big data analytics for modern businesses.',
    whatYouWillLearn: ['Data analytics pipelines', 'Dashboard visualization'],
    requirements: ['Basic spreadsheet or data familiarity'],
    targetAudience: ['Analysts & Business leaders'],
    modules: [],
    reviews: [],
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    comment: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    comment: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    comment: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    rating: 5,
  },
];
