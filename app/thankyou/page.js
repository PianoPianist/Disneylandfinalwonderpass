import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '../plans/Header'
import styles from './thankyou.module.css'
import homeStyles from '../home.module.css'

export default function page() {
  return (
    <div>
        <Navbar />
        <Header state="3" />

        <div className={styles.content}>
            <h1 className={styles.gradient1}>Thank you for your purchase</h1>
            <h1 className={styles.para}>Please check your registered email for the payment confirmation and the QR Code</h1>
        </div>
    </div>
  )
}