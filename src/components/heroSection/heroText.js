"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
const HeroText = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-6xl font-bold text-center ">
                Your Complete Solution for
                <span className="text-purple-500">
                <Typewriter
                    options={{
                        strings: ['WebApp', 'MobileApp', 'Graphics Design', 'Marketing'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </span>
            </h1>
        </div>
    );
};

export default HeroText;