import React from 'react';
import HeroText from './heroText';
import CarouselSection from './carousel';

const HeroSection = () => {
    return (
        <div class="overflow-hidden h-mvh">
            <div className="fixed top-10 right-10 z-1 size-96 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-200 to-transparent shadow-lg shadow-purple-500 opacity-10"></div>
            <div className="fixed top-30 left-20 z-1 size-52 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-slate-900 to-transparent shadow-lg shadow-slate-900 opacity-10"></div>
            <div className="justify-center flex flex-wrap md:h-dvh items-center">
                <div className="lg:basis-1/2 flex items-center justify-center flex-col">
                    <HeroText />
                    <button className="sm:hidden bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-20 ml-20">
                        Get Started
                    </button>
                </div>
                <div className="lg:basis-1/2 min-w-72 flex flex-col items-center justify-center relative">
                    <CarouselSection />
                </div>
            </div>

        </div>
    );
};

export default HeroSection;