import { Skills as SkillsType } from '@/types/skills'

import {
  BiLogoGit,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { BsStripe } from 'react-icons/bs'
import { FaReact, FaShopify } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoSass } from 'react-icons/io'
import { RiSupabaseFill } from 'react-icons/ri'
import { SiLangchain, SiNextdotjs, SiPrisma } from 'react-icons/si'

export const Skills: SkillsType[] = [
  {
    name: 'HTML',
    path: 'https://www.w3schools.com/html/default.asp',
    icon: <IoLogoHtml5 />,
  },
  {
    name: 'CSS',
    path: 'https://css-tricks.com/almanac/',
    icon: <IoLogoCss3 />,
  },
  {
    name: 'SASS/SCSS',
    path: 'https://sass-lang.com/',
    icon: <IoLogoSass />,
  },
  {
    name: 'Tailwind CSS',
    path: 'https://tailwindcss.com/',
    icon: <BiLogoTailwindCss />,
  },
  {
    name: 'JavaScript',
    path: 'https://javascript.info/',
    icon: <BiLogoJavascript />,
  },
  {
    name: 'React',
    path: 'https://react.dev/',
    icon: <FaReact />,
  },
  {
    path: 'https://zustand-demo.pmnd.rs/',
    name: 'Zustand',
  },
  {
    name: 'Next.js',
    path: 'https://nextjs.org/',
    icon: <SiNextdotjs className="h-5 w-5" />,
  },
  {
    name: 'TypeScript',
    path: 'https://www.typescriptlang.org/',
    icon: <BiLogoTypescript />,
  },
  {
    name: 'Supabase',
    path: 'https://supabase.com/',
    icon: <RiSupabaseFill className="h-5 w-5" />,
  },
  {
    name: 'Shopify',
    description: 'Remix, Extensions',
    path: 'https://www.shopify.com/',
    icon: <FaShopify />,
  },
  {
    name: 'Langchain',
    path: 'https://js.langchain.com/docs/get_started/introduction/',
    icon: <SiLangchain />,
  },
  {
    name: 'Prisma',
    path: 'https://www.prisma.io/',
    icon: <SiPrisma className="h-5 w-5" />,
  },
  {
    name: 'Stripe',
    path: 'https://stripe.com/',
    icon: <BsStripe className="h-5 w-5" />,
  },
  {
    name: 'Git',
    path: 'https://www.w3schools.com/git/default.asp',
    icon: <BiLogoGit />,
  },
]
