"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
        >
          <div className="w-[280px] h-[280px] xl:w-[410px] xl:h-[410px] mix-blend-lighten absolute">
            <Image
              src="/jj2.png"
              priority
              quality={100}
              fill
              alt="profile-pic"
              className="object-contain rounded-full"
            />
          </div>
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[470px] h-[300px] xl:h-[470px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="240"
            cy="240"
            r="250"
            stroke="#00ff00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo