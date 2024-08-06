import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde </p>
                <img src="https://ih1.redbubble.net/image.5454735661.6632/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
                <h4>Alisa Mikhailovna Kujou</h4>
                <p className={styles.bio}>web developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde </p>
                <img src="https://cdn.myanimelist.net/images/characters/4/536831.jpg?s=0bc87246db9e300b8ea782c24d5a5d42" />
                <h4>Masachika Kuze</h4>
                <p className={styles.bio}>web developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde ?</p>
                <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/113a3614-95cb-47ef-b3d0-6181b0c3d5b6/width=450/00135-3273471213.jpeg" />
                <h4>Yuki Suou</h4>
                <p className={styles.bio}>web developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
