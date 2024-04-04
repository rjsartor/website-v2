'use client';
import React from 'react';
import SocialLinks from './links';
import Spacer from './spacer';
import Nav from './nav';
import Image from 'next/image';

const LeftPane = () => {
  return (
    <div className="lg:fixed lg:h-screen md:justify-left flex flex-col justify-center">
      <div className="flex flex-col overflow-auto h-3/4">
        <div className="flex flex-col mb-2">
          <h1 className="text-5xl font-medium pb-3">Randal Sartor</h1>
          <h4 className="text-2xl secondary-text pb-3">Software Engineer</h4>
          <Spacer height={2} />
          <Image className='rounded-full' src='/images/amber-and-I-square.png' alt='avatar' width={225} height={225} />
        </div>
        <Spacer height={5} />
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:mt-auto">
          <SocialLinks />
        </div>
        <Spacer height={6} />
      </div>
    </div>
  );
}

export default LeftPane;
