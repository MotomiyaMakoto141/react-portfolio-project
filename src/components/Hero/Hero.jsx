import React from 'react'
import styles from './Hero.module.css'
import {FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi, it's me</p>
                <h3 className={styles.text_2}>Pipat Saosiri</h3>
                <p className={styles.text_3}>
                <span styles={{ marginRight: '10px'}}>I'm a </span>
                  <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'front-end Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer',
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
                </p>
                <p className={styles.text_4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam, <br /> harum atque, dignissimos a nostrum, delectus id inventore facilis iste dolore <br /> necessitatibus nihil nisi tenetur ipsum blanditiis consequuntur recusandae explicabo!
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_img}></div>
            </Tilt>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
