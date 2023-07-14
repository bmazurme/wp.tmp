import React from 'react';
import type { PropsWithChildren } from 'react';

import Header from '../header';
import Footer from '../footer';

export default function Content({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
