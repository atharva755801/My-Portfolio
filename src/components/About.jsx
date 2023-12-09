import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-emerald-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    <motion.div variant={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary-[17px] max-w-3xl leading-[30px]'>
      I am a result-oriented web developer specializing in React, JavaScript, and Selenium for automated testing. Leveraging three.js for immersive 3D elements, creating engaging and interactive user experiences. With a passion for crafting efficient and user-friendly web applications, I bring hands-on experience in delivering high-quality solutions. My portfolio highlights diverse projects, showcasing my proficiency in creating robust and scalable applications. Committed to staying abreast of industry trends and continuously enhancing my skill set, I am eager to contribute to dynamic and innovative web development projects.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")