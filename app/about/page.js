"use client"
import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./about.module.css"
import ImageParallax from "./ImageTilt"
// import * as smth from "./vanilla-tilt"
export default function Home() {

  return (
    <div>
      <Navbar state="about"/>

      <div className={mainstyle.content}>
          <h1 className={styles.homeHeading} id={styles.heading} style={{fontSize: "10vh", width: "100%"}}>
            <span className={styles.gradient1}>REDEFINING THEME</span>
            <span className={styles.headwhite}>PARK EXPERIENCE</span>
          </h1>
          <p className={mainstyle.homePara}>
          At WonderPass, we believe that visiting theme parks should be a seamless, extraordinary experience from start to finish. Our dedicated team of theme park enthusiasts is committed to redefining the way you enjoy these magical destinations. With innovation at our core, we strive to bring convenience, personalized service, and unmatched thrills to every ParkPass holder.
          </p>
      </div>
      <div className={mainstyle.images}>
        <ImageParallax className={mainstyle.image1} />
      </div>
    </div>
  )
}