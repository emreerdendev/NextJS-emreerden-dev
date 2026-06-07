import { Experience } from '@/types/experience'

export const ExperienceData: Experience[] = [
  {
    name: 'Popupsmart',
    icon: '/assets/icons/popupsmart.svg',
    path: 'https://popupsmart.com/',
    date: '21 February 2024 - 27 December 2024',
    location: 'Ankara, Turkey',
    workType: 'Hybrid',
    positions: [
      {
        title: 'Software Developer',
        date: '22 July 2024 - 27 December 2024',
        projects: [
          {
            name: 'HR Assistant AI',
            path: 'https://hrassistantai.com/',
            description:
              'HR Assistant AI is an AI-powered tool designed to automate and streamline various HR tasks using artificial intelligence. It helps manage in-house questions with automated answers and reduce repetitive tasks.',
            whatIDid: [
              'Next API endpoints for forgot, new and update password and billing processes',
              'Modal management for user interactions',
              'Stripe integration for payment processing',
              'Error handling and form validations',
              'Creating Hooks for UI animations',
              'UI development with shadcn/ui package (Auth, Billing, Profile and Dashboard pages)',
              'Responsive design for mobile and desktop views',
            ],
            stack: [
              'Next.js',
              'Next Auth',
              'TypeScript',
              'Redux / Redux Toolkit',
              'Zustand',
              'Tailwind CSS',
              'shadcn/ui package',
              'Langchain',
              'Prisma',
              'Stripe',
            ],
          },
          {
            name: 'LiveChatAI',
            path: 'https://livechatai.com/',
            description:
              'LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website.',
            whatIDid: [
              'Creating Next API endpoints for actions',
              'Prisma migrations, schema updates and functions',
              'React Query mutations, Zustand store management',
              'UX flow improvements (User deleting, AI Actions)',
              'UI improvements and bug fixes',
            ],
            stack: [
              'Next.js',
              'Next Auth',
              'TypeScript',
              'Redux / Redux Toolkit',
              'Zustand',
              'React-Query / Tanstack',
              'Tailwind CSS / SASS',
              'Langchain',
              'Prisma',
              'Stripe',
              'Posthog',
            ],
          },
        ],
      },
      {
        title: 'Intern Software Developer',
        date: '21 February 2024 - 22 July 2024',
        projects: [
          {
            name: 'Website Audit AI',
            path: 'https://websiteauditai.com/',
            description: 'AI-Powered Website Audit and CRO & UX Analysis',
            whatIDid: [
              `<b>Developed the entire project by myself</b>`,
              'Supabase integrations for user authentication processes and data storage',
              'OpenAI Vision API for image analysis with prompts',
              'Store management with Zustand',
              'Stripe integration for payment processing',
              'PDF export for the audit report with using the Puppeteer',
              'UI development all over the project',
            ],
            stack: [
              'Next.js',
              'TypeScript',
              'Zustand',
              'Tailwind CSS',
              'shadcn/ui package',
              'Supabase',
              'OpenAI API',
              'Langchain',
              'Stripe',
              'Vercel',
              'Puppeteer',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Analyzify',
    icon: '/assets/icons/analyzify.png',
    path: 'https://analyzify.com/',
    date: '24 March 2025 - Present',
    location: 'Tallinn, Harjumaa, Estonia',
    workType: 'Remote',
    positions: [
      {
        title: 'Front-End Developer',
        date: '24 March 2025 - Present',
      },
    ],
  },
]
