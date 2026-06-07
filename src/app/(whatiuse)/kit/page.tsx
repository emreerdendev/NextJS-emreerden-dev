import type { Metadata } from 'next';
import React from 'react';
//
import KitComponent from '@/containers/pages/whatiuse/kit';

export const metadata: Metadata = {
  title: 'Kit - Emre Erden',
  description: "Emre Erden's Kit",
};

const KitPage = () => {
  return <KitComponent />;
};

export default KitPage;
