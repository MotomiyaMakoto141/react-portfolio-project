import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <dir className={styles.services_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde distinctio perferendis quam reiciendis, temporibus obcaecati aliquam quaerat recusandae harum exercitationem asperiores earum voluptate aspernatur dolorum tempora?
                </p>
            </dir>
            <dir className={styles.services_items}>
                <FaPaintbrush />
                <h4>Web design</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde distinctio perferendis quam reiciendis, temporibus obcaecati aliquam quaerat recusandae harum exercitationem asperiores earum voluptate aspernatur dolorum tempora?
                </p>
            </dir>
            <dir className={styles.services_items}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias accusantium libero unde distinctio perferendis quam reiciendis, temporibus obcaecati aliquam quaerat recusandae harum exercitationem asperiores earum voluptate aspernatur dolorum tempora?
                </p>
            </dir>
        </div>
    </div>
  )
}

export default Services
