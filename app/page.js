import React from 'react'
import Image from "next/image";
import AnimatedBoxes from './../components/AnimatedBox';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <section className="lg:h-[70vh]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-6">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span> {/* Spider and web */}
            <h1 className="h2 mb-6"><span className="h2 md:text-[60px] text-accent">Joseph Busayo Jayeoba</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I'm proficient at various tool
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8 items-center">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
