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

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice: number;
  badge: 'Bestseller' | 'Popular' | 'Featured' | 'New';
  creator: Creator;
  thumbnail: string;
  description: string;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  modules: Module[];
  reviews: Review[];
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

export const MOCK_CREATORS: Record<string, Creator> = {
  'purepixel-studio': {
    id: 'purepixel-studio',
    name: 'PurePixel Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    title: 'Senior Digital Design Studio & Tech Educators',
    bio: 'Creating top-tier digital assets, UI/UX systems, and full-stack web applications for global brands.',
    about: 'PurePixel Studio is an award-winning creative tech design studio with over 10 years of industry experience. We specialize in transforming complex concepts into intuitive user experiences and training the next generation of designers and developers.',
    rating: 4.9,
    reviewCount: 1250,
    studentCount: 14500,
    courseCount: 12,
    verified: true,
    socials: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      website: 'https://purepixel.design',
    },
  },
  'shafin-ahmed': {
    id: 'shafin-ahmed',
    name: 'Shafin Ahmed',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    title: 'Lead Frontend Engineer @ TechCorp',
    bio: 'Passionate Web Architect specializing in React, Next.js, and modern TypeScript web development.',
    about: 'Shafin has built scalable enterprise applications serving millions of users. He simplifies complex web topics into actionable step-by-step tutorials.',
    rating: 4.8,
    reviewCount: 940,
    studentCount: 11200,
    courseCount: 8,
    verified: true,
    socials: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  'sayed-sheikh': {
    id: 'sayed-sheikh',
    name: 'Sayed Sheikh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    title: 'AI Research Engineer & Python Instructor',
    bio: 'Building intelligent applications with PyTorch, TensorFlow, and Large Language Models.',
    about: 'Sayed is an AI practitioner dedicated to democratizing machine learning education with practical real-world projects.',
    rating: 4.95,
    reviewCount: 680,
    studentCount: 8900,
    courseCount: 5,
    verified: true,
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  'maliha-mobassira': {
    id: 'maliha-mobassira',
    name: 'Mst. Maliha Mobassira',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&q=80&w=1200',
    title: 'Head of Growth & Digital Marketing Specialist',
    bio: 'Helping startups and creators scale revenue through performance marketing and community growth.',
    about: 'Maliha has led digital growth strategies for Y-Combinator backed startups and top e-learning platforms.',
    rating: 4.85,
    reviewCount: 520,
    studentCount: 6400,
    courseCount: 4,
    verified: true,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
};

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'development',
    name: 'Web Development',
    slug: 'development',
    iconName: 'Code',
    courseCount: 42,
    description: 'Master HTML, CSS, JavaScript, React, Next.js, and backend technologies.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'design',
    name: 'UI/UX & Design',
    slug: 'design',
    iconName: 'Palette',
    courseCount: 35,
    description: 'Learn Figma, wireframing, user research, and modern design systems.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'data-ai',
    name: 'Data Science & AI',
    slug: 'data-ai',
    iconName: 'Brain',
    courseCount: 28,
    description: 'Explore Python, Machine Learning, Deep Learning, and Prompt Engineering.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'business',
    name: 'Business & Growth',
    slug: 'business',
    iconName: 'TrendingUp',
    courseCount: 19,
    description: 'Build entrepreneurship skills, market analysis, and product management.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    slug: 'marketing',
    iconName: 'Megaphone',
    courseCount: 24,
    description: 'Master SEO, social media advertising, copywriting, and sales funnels.',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'mobile',
    name: 'Mobile App Dev',
    slug: 'mobile',
    iconName: 'Smartphone',
    courseCount: 16,
    description: 'Build iOS & Android mobile applications using React Native and Flutter.',
    color: 'from-cyan-500 to-blue-600',
  },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset: A Comprehensive Guide',
    subtitle: 'Learn how to conceptualize, design, and launch profitable high-converting digital products and SaaS assets.',
    category: 'UI/UX & Design',
    level: 'Intermediate',
    rating: 4.9,
    reviewCount: 128,
    students: 3450,
    duration: '14h 30m',
    lessonsCount: 24,
    price: 25,
    originalPrice: 45,
    badge: 'Bestseller',
    creator: MOCK_CREATORS['purepixel-studio'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    description: 'In this comprehensive course, you will learn the exact step-by-step process of creating market-ready digital assets from scratch. Whether you want to build UI kits, SaaS design templates, or digital products, this course equips you with actionable skills, production workflows, and monetization strategies.',
    whatYouWillLearn: [
      'Structure and monetize digital design assets efficiently',
      'Master Figma auto-layout, design tokens, and component libraries',
      'Create reusable UI kits that sell on digital marketplaces',
      'Build seamless onboarding and dashboard interfaces',
      'Prepare production-ready code exports and asset guidelines',
      'Market your digital products to reach global buyers',
    ],
    requirements: [
      'Basic knowledge of Figma or digital design tools',
      'A laptop/desktop computer with internet connection',
      'No coding experience required, though basic HTML/CSS is a plus',
    ],
    targetAudience: [
      'UI/UX Designers wanting to generate passive digital asset income',
      'Frontend Developers seeking design system mastery',
      'Digital Entrepreneurs & Product Managers',
    ],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Fundamentals of Digital Asset Creation',
        duration: '2h 15m',
        lessons: [
          {
            id: 'les-1-1',
            title: '1.1 Introduction to Digital Products & Monetization',
            duration: '15m 20s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Understanding the digital asset economy, market demand validation, and positioning your product for recurring revenue.',
            pdfUrl: '#',
          },
          {
            id: 'les-1-2',
            title: '1.2 Conducting Market Research & Finding High-Value Niches',
            duration: '24m 45s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Learn how to analyze competitor products, identify underserved creator needs, and validate your product idea before designing.',
          },
          {
            id: 'les-1-3',
            title: '1.3 Planning Your Asset Architecture & Design System',
            duration: '35m 10s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Setting up color tokens, typography scales, grid layout foundations, and variable systems in Figma.',
          },
        ],
      },
      {
        id: 'mod-2',
        title: 'Module 2: Designing High-Impact UI Components',
        duration: '4h 40m',
        lessons: [
          {
            id: 'les-2-1',
            title: '2.1 Master Figma Auto Layout 5.0 & Responsive Variants',
            duration: '42m 15s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Deep dive into advanced auto layout techniques, absolute positioning, nested frames, and component set variants.',
          },
          {
            id: 'les-2-2',
            title: '2.2 Crafting Dashboard Widgets & Data Visualization Systems',
            duration: '50m 00s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Designing accessible charts, statistics cards, data tables, filter toolbars, and micro-interactions.',
          },
          {
            id: 'les-2-3',
            title: '2.3 Dark Mode & Light Mode Theme Token Systems',
            duration: '38m 20s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Implementing dark/light mode toggles with seamless color mapping and accessible contrast ratios.',
          },
        ],
      },
      {
        id: 'mod-3',
        title: 'Module 3: Code Handoff, Packaging & Marketplace Launch',
        duration: '3h 35m',
        lessons: [
          {
            id: 'les-3-1',
            title: '3.1 Exporting Production Assets & Documentation Guidelines',
            duration: '30m 10s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Preparing SVG icons, PNG thumbnails, interactive Figma previews, and developer handoff documentation.',
          },
          {
            id: 'les-3-2',
            title: '3.2 Setting Up Your Digital Storefront & Sales Funnel',
            duration: '45m 30s',
            isPreview: false,
            isCompleted: false,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Building high-converting landing pages, pricing strategies, and integration with payment gateways.',
          },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-1',
        userName: 'Alex Johnson',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
        rating: 5,
        date: '2 days ago',
        title: 'Extremely detailed and actionable!',
        comment: 'This course completely transformed how I structure my Figma design systems. I launched my first UI Kit on Gumroad last week and already made 12 sales! PurePixel Studio is an exceptional instructor.',
        helpfulCount: 24,
      },
      {
        id: 'rev-2',
        userName: 'Sophia Martinez',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
        rating: 5,
        date: '1 week ago',
        title: 'Best investment for frontend designers',
        comment: 'The section on Auto Layout variants and design token mapping alone is worth 10x the price. Very easy to follow video lessons with practical templates.',
        helpfulCount: 18,
      },
      {
        id: 'rev-3',
        userName: 'David Chen',
        userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120',
        rating: 4,
        date: '2 weeks ago',
        title: 'Great content, super helpful exercises',
        comment: 'Clear explanations and fantastic real-world examples. Loved the downloadable Figma starter file provided in Module 1.',
        helpfulCount: 9,
      },
    ],
  },
  {
    id: 'nextjs-fullstack-dev',
    title: 'Full-Stack Next.js 15 & TypeScript Mastery',
    subtitle: 'Build production-grade SaaS web applications with App Router, Server Actions, Tailwind CSS, and MongoDB.',
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.95,
    reviewCount: 215,
    students: 4890,
    duration: '22h 15m',
    lessonsCount: 38,
    price: 32,
    originalPrice: 65,
    badge: 'Popular',
    creator: MOCK_CREATORS['shafin-ahmed'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    description: 'Master modern full-stack web development with Next.js App Router. Build high-performance web applications with server side rendering, static site generation, API routes, authentication, and database integrations.',
    whatYouWillLearn: [
      'Master Next.js App Router architecture & Server Components',
      'Implement authentication with NextAuth / Clerk',
      'Connect MongoDB & PostgreSQL databases using Prisma & Mongoose',
      'Build responsive UI components with Tailwind CSS & Framer Motion',
      'Deploy applications seamlessly to Vercel with CI/CD',
    ],
    requirements: [
      'Intermediate understanding of JavaScript (ES6+)',
      'Basic knowledge of React fundamentals and JSX syntax',
    ],
    targetAudience: [
      'React developers looking to upgrade to full-stack Next.js',
      'Software engineers building commercial SaaS apps',
    ],
    modules: [
      {
        id: 'mod-n1',
        title: 'Module 1: Next.js Architecture & Setup',
        duration: '3h 10m',
        lessons: [
          {
            id: 'les-n1-1',
            title: '1.1 Overview of Server vs Client Components',
            duration: '20m 00s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Understanding the Next.js execution model and rendering paradigms.',
          },
          {
            id: 'les-n1-2',
            title: '1.2 Setting Up App Router & Directory Structure',
            duration: '25m 30s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Configuring TypeScript, Tailwind CSS, and alias paths.',
          },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-n1',
        userName: 'Michael Brown',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
        rating: 5,
        date: '3 days ago',
        title: 'Mindblowing Next.js Course!',
        comment: 'Shafin is a genius instructor. The way he breaks down Server Components and Server Actions is second to none.',
        helpfulCount: 32,
      },
    ],
  },
  {
    id: 'ai-engineering-python',
    title: 'AI & Machine Learning with Python & PyTorch',
    subtitle: 'From mathematical foundations to training Neural Networks, LLMs, and deploying AI models to production.',
    category: 'Data Science & AI',
    level: 'Intermediate',
    rating: 4.88,
    reviewCount: 96,
    students: 2890,
    duration: '18h 45m',
    lessonsCount: 30,
    price: 29,
    originalPrice: 59,
    badge: 'Featured',
    creator: MOCK_CREATORS['sayed-sheikh'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    description: 'Unlock the power of Artificial Intelligence! This course covers linear regression, classification algorithms, deep neural networks, convolutional networks, and fine-tuning Transformer models.',
    whatYouWillLearn: [
      'Build Machine Learning models with Scikit-Learn',
      'Construct Deep Neural Networks with PyTorch',
      'Train Computer Vision models with CNNs',
      'Fine-tune Large Language Models (LLMs) with HuggingFace',
      'Deploy AI REST APIs using FastAPI and Docker',
    ],
    requirements: ['Basic Python programming experience', 'High school level algebra'],
    targetAudience: ['Developers wanting to transition into AI/ML', 'Data analysts and software engineers'],
    modules: [
      {
        id: 'mod-ai1',
        title: 'Module 1: Machine Learning Foundations',
        duration: '4h 00m',
        lessons: [
          {
            id: 'les-ai1-1',
            title: '1.1 Introduction to AI & Data Pipelines',
            duration: '22m 10s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Data preprocessing, feature engineering, and model evaluation metrics.',
          },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-ai1',
        userName: 'Elena Rostova',
        userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
        rating: 5,
        date: '5 days ago',
        title: 'Exceptional PyTorch tutorial!',
        comment: 'Sayed Sheikh explains tensor operations and neural backpropagation with great clarity.',
        helpfulCount: 15,
      },
    ],
  },
  {
    id: 'digital-marketing-pro',
    title: 'Digital Marketing & Growth Funnel Mastery 2026',
    subtitle: 'Scale customer acquisition with Google Ads, Meta Marketing, Email Funnels, and Viral Growth Hacking.',
    category: 'Digital Marketing',
    level: 'Beginner',
    rating: 4.82,
    reviewCount: 110,
    students: 3120,
    duration: '11h 20m',
    lessonsCount: 20,
    price: 19,
    originalPrice: 39,
    badge: 'New',
    creator: MOCK_CREATORS['maliha-mobassira'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Master performance marketing and customer growth strategies. Learn how to craft high-converting campaigns across Google, Meta, TikTok, and automated email workflows.',
    whatYouWillLearn: [
      'Design high-converting customer acquisition funnels',
      'Optimize Google PPC and Meta Ads campaigns for maximum ROI',
      'Master SEO strategies to drive organic search traffic',
      'Build automated email nurture series with high click rates',
    ],
    requirements: ['No prior marketing experience required'],
    targetAudience: ['Entrepreneurial founders', 'Marketing managers and content creators'],
    modules: [
      {
        id: 'mod-m1',
        title: 'Module 1: Performance Marketing Core Concepts',
        duration: '2h 45m',
        lessons: [
          {
            id: 'les-m1-1',
            title: '1.1 Funnel Architecture & Audience Targeting',
            duration: '18m 30s',
            isPreview: true,
            isCompleted: true,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Building custom buyer personas and defining conversion goals.',
          },
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-m1',
        userName: 'Jason Vance',
        userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120',
        rating: 5,
        date: '1 week ago',
        title: 'Super practical strategies',
        comment: 'Maliha’s insights into ad copywriting helped me double our store conversion rate in 2 weeks!',
        helpfulCount: 21,
      },
    ],
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Sayed Sheikh',
    role: 'Full-Stack Developer @ ByteCraft',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    comment: 'ByteSpace transformed how I learn new tech stacks. The courses are concise, beautifully designed, and packed with practical real-world applications.',
    rating: 5,
    courseTitle: 'Build Digital Asset Guide',
  },
  {
    id: 't-2',
    name: 'Shafin Ahmed',
    role: 'UI/UX Lead Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    comment: 'The quality of creators on ByteSpace is unmatched. As an instructor, the creator tools make uploading and managing courses effortless!',
    rating: 5,
    courseTitle: 'Next.js 15 Mastery',
  },
  {
    id: 't-3',
    name: 'Mst. Maliha Mobassira',
    role: 'Growth Strategist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    comment: 'I landed my dream role as a Product Designer within 3 months of taking courses on ByteSpace. Highly recommended for ambitious learners!',
    rating: 5,
    courseTitle: 'UI/UX Masterclass',
  },
];

export const MOCK_STATS = [
  { label: 'Active Learners', value: '15K+' },
  { label: 'Top Instructors', value: '75+' },
  { label: 'Skill Categories', value: '10+' },
  { label: 'Course Completion Rate', value: '98%' },
];
