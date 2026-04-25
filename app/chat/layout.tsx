/**
 * Root layout for the chat route.
 * Renders the navigation and suspends the chat page until it is ready.
 * Displays the loading indicator while the page content is being loaded.
 */

'use client';
import React from 'react';
import Nav from '../components/Nav';
import { Suspense } from 'react';
import Page from './page';
import Loading from './loading';

const Layout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </>
  );
};

export default Layout;
