"use-client"
import React from 'react'
import styles from './card.module.css'

export default function Card(props) {
  return (
    <div className={styles.container}>
        <img src={props.img} className={styles.image}></img>
        <p className={styles.title}>{props.title}</p>
    
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}