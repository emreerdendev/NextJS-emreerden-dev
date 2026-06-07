import type { Metadata } from 'next';
import React from 'react';
//
import StackPageComponent from '@/containers/pages/whatiuse/stack';

export const metadata: Metadata = {
  title: 'Stack - Emre Erden',
  description: "Emre Erden's Stack",
};

const StackPage = () => {
  return <StackPageComponent />;
};

export default StackPage;
