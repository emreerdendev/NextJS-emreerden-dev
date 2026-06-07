'use client';

import React, { useState } from 'react';
//
import { motion } from 'framer-motion';
//
import { Browser } from '@/constants/pages/whatiuse/browser';
//
import PageHeaderComponent from '@/components/page-header';
import WhatIUseListComponent from '@/components/whatiuse-list';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BrowserPageComponent = () => {
  const [browser, setBrowser] = useState<'Firefox' | 'Chrome'>('Firefox');
  const browsers = ['Firefox', 'Chrome'] as const;

  return (
    <main className="Browser-Extensions Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="browser exts"
          pageDescription="Useful and efficient Browser Add-ons I use"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="flex border rounded-md p-1 w-full max-w-72 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700"
        >
          {browsers.map((b) => (
            <Button
              key={b}
              onClick={() => setBrowser(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn('w-full h-8', {
                'bg-white hover:bg-white dark:bg-zinc-700 dark:hover:bg-zinc-700':
                  browser === b,
              })}
            >
              {b}
            </Button>
          ))}
        </motion.div>

        <WhatIUseListComponent
          name="Browser"
          constName={Browser}
          browser={browser}
        />
      </div>
    </main>
  );
};

export default BrowserPageComponent;
