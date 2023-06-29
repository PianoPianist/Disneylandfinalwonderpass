import React from 'react'
import Navbar from '@/components/Navbar'
import mainstyles from "../home.module.css"
import styles from "./review.module.css"
import doosraStyles from "../about/about.module.css"

export default function page() {
  return (
    <div>
        <Navbar state="reviews"/>

        <div className={doosraStyles.content}>
            <h1 className={mainstyles.homeHeading} style={{fontSize: "5vw"}}>
            <span className={mainstyles.gradient1}>Reviews</span>
            </h1>
        </div>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <h1 className={styles.heading}>Bhavit Grover</h1>
            <p className={styles.para}>WonderPass is a game-changer! This incredible card allows you to skip the queue, granting you front-row seats and an amazing golf cart experience, all for free. It's an absolute delight to breeze past the lines and enjoy VIP treatment. With WonderPass, you'll feel like a true VIP, effortlessly maximizing your enjoyment and creating unforgettable memories. Don't miss out on this fantastic opportunity!</p>
          </div>
          <div className={styles.review2}>
            <h1 className={styles.heading}>Prisha Bhatia</h1>
            <p className={styles.para}>It was a wonderful experience. Definitely loved it!</p>
          </div>
          <div className={styles.review2}>
            <h1 className={styles.heading}>Jai Dugal</h1>
            <p className={styles.para}>Will definitely recommend it to others. Keep up the good work!</p>
          </div>
          <div className={styles.review3}>
            <h1 className={styles.heading}>Rahul Shady</h1>
            <p className={styles.para2}>Unlock extraordinary moments with WonderPass! Skip queues, secure front-row seats, and enjoy complimentary golf cart rides. Experience the VIP lifestyle and elevate your outings with this remarkable card. Embrace convenience and luxury like never before with WonderPass, your key to unforgettable experiences!</p>
          </div>
        </div>
    </div>
  )
}