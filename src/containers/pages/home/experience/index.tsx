//
import { motion } from 'framer-motion'
//
import { ExperienceData } from '@/constants/pages/home/experience'
import { calculateTotalExperience } from '@/lib/utils'
import ExperienceCardComponent from './experience-card'

const ExperienceComponent = () => {
  const totalDuration = calculateTotalExperience(ExperienceData)

  return (
    <div className="mx-auto flex flex-col gap-y-8 mdl:mx-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 7 * 0.1 }}
        className="flex items-center gap-x-1.5"
      >
        <div className="text-center text-xl font-medium mdl:text-left">
          Experiences
        </div>
        <span className="cursor-default rounded-md border px-2 py-1.5 text-[11px] leading-none text-zinc-500 transition-transform hover:scale-105 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
          {totalDuration}
        </span>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 8 * 0.1 }}
        className="ml-2 flex flex-col border-l dark:border-zinc-600"
      >
        {ExperienceData.slice()
          .reverse()
          .map((experience, index) => (
            <ExperienceCardComponent
              key={index}
              name={experience.name}
              icon={experience.icon}
              path={experience.path}
              date={experience.date}
              location={experience.location}
              workType={experience.workType}
              positions={experience.positions}
            />
          ))}
      </motion.div>
    </div>
  )
}

export default ExperienceComponent
