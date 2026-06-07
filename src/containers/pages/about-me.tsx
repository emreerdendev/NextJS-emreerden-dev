'use client';

import { useState } from 'react';
//
import { calculateAge, cn } from '@/lib/utils';
import { motion } from 'framer-motion';
//
import { Button } from '@/components/ui/button';
import {
  CertificationData,
  EducationData,
  EventData,
  LanguageData,
} from '@/constants/pages/about-me/data';
import CertificationCardComponent from './about-me/certification-card';
import EducationCardComponent from './about-me/education-card';
import EventCardComponent from './about-me/event-card';

type AboutTab = 'Education' | 'Certifications' | 'Languages' | 'Events';

type Props = {};

const AboutPageComponent = (props: Props) => {
  const age = calculateAge(new Date('2000-11-09'));
  const [tab, setTab] = useState<AboutTab>('Education');
  const tabs: AboutTab[] = ['Education', 'Certifications', 'Languages', 'Events'];

  return (
    <main className="About Page">
      <div className="Page-Content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 2 * 0.1 }}
          className="Page-Title"
        >
          who am i.
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 3 * 0.1 }}
          className="text-lg text-center mdl:text-left leading-8"
        >
          First of all, Hello Mate! My name is Emre and I'm {age} years old. I live
          in{' '}
          <a
            href="https://goo.gl/maps/cadu4sCBbzi4B6F98"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
          >
            Ankara/Turkey
          </a>
          . In the last years of secondary school, my interest in the world of
          informatics started. I've been learning since then. I'm open to
          improving myself in this profession and I'm working to become an
          experienced developer.
        </motion.div>

        <div className="flex flex-col gap-y-4 leading-7">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 4 * 0.1 }}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            What I like to do and my hobbies are:
          </motion.div>

          <div className="flex flex-col gap-y-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 6 * 0.1 }}
            >
              I love playing computer games since childhood. It's something I
              can never give up. If you are interested in games, you can check{' '}
              <a
                target="_blank"
                href="https://steamcommunity.com/id/Wiazeph"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
              >
                My Steam Account
              </a>{' '}
              for the games I play and add me as a friend.
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 5 * 0.1 }}
            >
              I love watching Movies and TV Series. And I like to talk to people
              about them. If you want to see the movies I watched and my watch
              list:{' '}
              <a
                target="_blank"
                href="https://letterboxd.com/Wiazeph/"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
              >
                My Letterboxd Account
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 7 * 0.1 }}
            >
              Also, I have to say that finding new songs and creating playlists
              on Spotify are among my hobbies. You can check{' '}
              <a
                target="_blank"
                href="https://open.spotify.com/user/gb0jo18xvox7w4gmijbj3l301?si=089ed329e6da4203"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
              >
                My Spotify Account
              </a>{' '}
              for playlists.
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 8 * 0.1 }}
          className="flex border rounded-md p-1 w-full max-w-max bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 overflow-x-auto"
        >
          {tabs.map((t) => (
            <Button
              key={t}
              onClick={() => setTab(t)}
              variant={'secondary'}
              size={'sm'}
              className={cn('hover:text-zinc-500 dark:hover:text-zinc-400 w-full h-8 text-nowrap', {
                'bg-white hover:bg-white dark:bg-zinc-700 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-50':
                  tab === t,
              })}
            >
              {t}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 9 * 0.1 }}
        >
          {tab === 'Education' ? (
            <div className="flex flex-col border-l dark:border-zinc-600 ml-2">
              {EducationData.map((education, index) => (
                <EducationCardComponent
                  key={index}
                  name={education.name}
                  degree={education.degree}
                  field={education.field}
                  date={education.date}
                />
              ))}
            </div>
          ) : tab === 'Certifications' ? (
            <div className="flex flex-col border-l dark:border-zinc-600 ml-2">
              {CertificationData.map((cert, index) => (
                <CertificationCardComponent
                  key={index}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  credentialUrl={cert.credentialUrl}
                />
              ))}
            </div>
          ) : tab === 'Events' ? (
            <div className="flex flex-col border-l dark:border-zinc-600 ml-2">
              {EventData.map((event, index) => (
                <EventCardComponent
                  key={index}
                  name={event.name}
                  role={event.role}
                  date={event.date}
                  location={event.location}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col max-w-[550px] gap-y-4">
              {LanguageData.map((language, index) => (
                <div key={index} className='flex flex-col gap-y-4'>
                  <div className="flex flex-col gap-y-1 ">
                    <div className="text-lg font-medium">{language.name}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {language.proficiency}
                    </div>
                  </div>
                  {index < LanguageData.length - 1 && (
                    <div className="border-b dark:border-zinc-700" />
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPageComponent;
