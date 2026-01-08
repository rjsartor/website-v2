'use client';
import React from 'react';
import SocialLinks from './links';
import Spacer from './spacer';
import Nav from './nav';
import Image from 'next/image';

const LeftPane = () => {
    return (
        <div className="lg:fixed lg:h-screen flex flex-col">
            <div className="flex flex-col overflow-auto h-3/4">
                <div className="flex flex-col mb-2">
                    <h1 className="text-5xl font-medium pb-3">Randal Sartor</h1>
                    <h4 className="text-xl secondary-text pb-3">SOFTWARE ENGINEER</h4>
                    {/* // removing the picture for now */}
                    {/* <Image className='rounded-full' src='/images/amber-and-I-square.png' alt='avatar' width={225} height={225} /> */}
                </div>
                {/* Nav moved below, above SocialLinks */}
                <div className="hidden lg:block mt-auto">
                    <Nav />
                </div>
                <Spacer height={4} />
                <SocialLinks />
            </div>
        </div>
    );
}

export default LeftPane;
