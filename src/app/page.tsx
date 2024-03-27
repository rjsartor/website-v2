'use client';
import LeftPane from './components/left-pane'
import RightPane from './components/right-pane'
import './globals.css'
import { useEffect } from 'react';
import { initializeMixpanel, trackEvent } from './services/mixpanel';

export default function Home() {

  useEffect(() => {
    initializeMixpanel();
    trackEvent('Page Viewed', { page: 'Home'});
  }, []);

  return (
    <div className='flex flex-col md:flex-row sm:flex-row justify-evenly mt-24'>
      <div className='layout-width'>
        <LeftPane />
        <RightPane />
      </div>
    </div>
  )
}
