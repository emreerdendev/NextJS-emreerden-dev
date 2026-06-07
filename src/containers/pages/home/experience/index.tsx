//
import { motion } from 'framer-motion'
//
import { ExperienceData } from '@/constants/pages/home/experience'
import { calculateTotalExperience } from '@/lib/utils'
import ExperienceCardComponent from './experience-card'

const ExperienceComponent = () => {
  const totalDuration = calculateTotalExperience(ExperienceData)

  return (
    <div className="flex flex-col gap-y-8 mx-auto mdl:mx-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 7 * 0.1 }}
        className="flex items-center gap-x-1.5"
      >
        <div className="text-xl text-center mdl:text-left font-medium">
          Experience
        </div>
        <span className="hover:scale-105 transition-transform border cursor-default dark:border-zinc-700 py-1.5 px-2 rounded-md text-[11px] leading-none dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400">
          {totalDuration}
        </span>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 8 * 0.1 }}
        className="flex flex-col border-l dark:border-zinc-600 ml-2"
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
              position={experience.position}
              location={experience.location}
              workType={experience.workType}
              projects={experience.projects}
            />
          ))}
      </motion.div>
    </div>
  )
}

export default ExperienceComponent
