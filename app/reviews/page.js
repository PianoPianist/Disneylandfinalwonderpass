import React from 'react'
import Navbar from '@/components/Navbar'
import mainstyles from "../home.module.css"
import styles from "./review.module.css"
import doosraStyles from "../about/about.module.css"

export default function page() {
  return (
    <div>
        <Navbar state="plans"/>

        <div className={doosraStyles.content}>
            <h1 className={mainstyles.homeHeading} style={{fontSize: "5vw"}}>
            <span className={mainstyles.gradient1}>Reviews</span>
            </h1>
        </div>
    </div>
  )
}
