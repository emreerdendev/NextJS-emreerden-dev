'use client'

import React from 'react'
//
import { motion } from 'framer-motion'
//
import { Skills } from '@/constants/pages/skills'
//
import PageHeaderComponent from '../../components/page-header'

const SkillsPageComponent = () => {
  return (
    <main className="Skills Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="skills"
          pageDescription="Skills I know, I use and currently continue to learn"
        />

        <ul className="Skills-List Main-Card-List">
          {Skills.map((skill, index) => (
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 4 * 0.1 }}
              key={index}
            >
              <a
                href={skill.path}
                target="_blank"
                rel="noopener noreferrer"
                className="Main-Card"
              >
                {skill?.icon && (
                  <div className="shrink-0 text-2xl">{skill.icon}</div>
                )}

                <div>
                  <div className="text-sm">{skill.name}</div>
                  {skill.description && (
                    <div className="text-[10px] opacity-60">
                      {skill.description}
                    </div>
                  )}
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default SkillsPageComponent
