"use client"
import React, {useState} from 'react'
import styles from '../login/login.module.css'
import Navbar from '@/components/Navbar';

export default function Login() {
  return (
    <div>
    <Navbar />
    <form method='post' className={styles.screen}>
    <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
    </div>
      <div className={styles.loginBox}>
          <h1 className={styles.loginHead}>Sign Up</h1>
          <label className={styles.labels}>Username</label>
          <input className={styles.username} type='text' placeholder='Username' />
          <label className={styles.labels}>Password</label>
          <input className={styles.password} type='password' placeholder='Password'/>
          <a className={styles.loginBtn}><button>Sign Up</button></a>
          <label className={styles.labels}>Already have an account, <a href="./login" style={{cursor: "pointer"}}>Log In</a></label>
      </div>
    </form>
    </div>
  )
}
