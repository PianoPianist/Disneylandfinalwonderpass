"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import homeStyles from "../../home.module.css"
import styles from "../purchase.module.css"
import Header from '@/app/plans/Header'

export default function page() {
  return (
    <div>
        <Navbar />
        <Header state="2" />

        <div className={styles.content}>
            <h1 className={homeStyles.homeHeading} style={{fontSize: "3.5vw"}}>
                <span className={homeStyles.gradient1}>Payment</span>
            </h1>
            <p className={styles.para}>Card Number</p>
            <p className={styles.paraBelow}>Enter the 16 digit number on your card</p>
            <div className={styles.cardDiv}>
            <img src="https://cdn.discordapp.com/attachments/1122590461937328290/1123855061840306276/image.png" className={styles.image} />
                <input className={styles.card} type="number" />
            </div>
            <div className={styles.cvv}>
                <div>
                    <p className={styles.para}>CVV Number</p>
                    <p className={styles.paraBelow}>Enter the 3-4 digit number on your card</p>
                </div>
                <div className={styles.cardDiv1}>
                    <input type="number" className={styles.card} />
                </div>
            </div>
            <div className={styles.cvv}>
                <div>
                    <p className={styles.para}>Name</p>
                    <p className={styles.paraBelow}>Enter the name of the Card holder</p>
                </div>
                <div className={styles.cardDiv1} style={{marginLeft: "6.5vw"}} >
                    <input className={styles.card} />
                </div>
            </div>
            <div className={styles.paymentCard}>
                <h1 className={styles.planName}>DUO</h1>
                <div className={styles.planThings}>
                    <h1 className={styles.price}>PRICE</h1>
                    <h1 className={styles.price}>Tax</h1>
                    <h1 className={styles.price}>Addon</h1>
                </div>
                <div className={styles.planThings2} style={{marginLeft: "15vw"}}>
                    <h1 className={styles.price2}>$100</h1>
                    <h1 className={styles.price2}>$0</h1>
                    <h1 className={styles.price2}>$0</h1>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1122590461937328290/1123917125367648387/image.png" className={styles.hr} />
                <h1 className={styles.price3}>TOTAL</h1>
                <h1 className={styles.price4}>$100</h1>
            </div>
            <div className={styles.payBtn}>
                <a className={styles.btn} href="/login" >Pay now</a>
            </div>
        </div>
    </div>
  )
}
