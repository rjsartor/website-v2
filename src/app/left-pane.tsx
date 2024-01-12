'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SocialLinks from './links';
import Spacer from './spacer';
import Nav from './nav';
import Image from 'next/image';

enum sections {
  about = 'about',
  experience = 'experience',
  projects = 'projects',
}

const LeftPane = () => {
  return (
    <div className="w-full lg:w-1/3 lg:fixed h-screen p-4 flex flex-col">
      <div className="flex flex-col overflow-auto h-2/3">
        <div className="flex flex-col mb-2">
          <h1 className="text-5xl pb-3">Randy Sartor</h1>
          <h4 className="text-xl secondary-text pb-3">Software Engineer</h4>
          <Spacer height={2} />
          <Image className="rounded-full object-cover" src='/images/me-and-amber.png' alt='avatar' width={200} height={100} />
        </div>
        <Spacer height={5} />
        <Nav />
        <div className="mt-auto">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default LeftPane;
