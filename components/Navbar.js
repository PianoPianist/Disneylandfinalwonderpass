"use client"
import React from 'react'
import styles from "./styles/nav.module.css"

export default function Navbar(props) {
  return (
    <div className={styles.parent}>
      <div>
        <img className={styles.logo} src="https://cdn.discordapp.com/attachments/1122590461937328290/1124013208223621330/Group_29.png" />
      </div>

      <div className={styles.links}>
        <h1 className={styles.link} style={props.state == "home" ? {color: "#FFA8DC"} : {color: "#FFF"}}><a href="/" className="cursor-pointer no-underline">Home</a></h1>
        <h1 className={styles.link} style={props.state == "about" ? {color: "#FFA8DC"} : {color: "#FFF"}}><a href="/about" className="cursor-pointer no-underline">About</a></h1>
        <h1 className={styles.link} style={props.state == "features" ? {color: "#FFA8DC"} : {color: "#FFF"}}><a href="/features" className="cursor-pointer no-underline">Features</a></h1>
        <h1 className={styles.link} style={props.state == "plans" ? {color: "#FFA8DC"} : {color: "#FFF"}}><a href="/plans" className="cursor-pointer no-underline">Plans</a></h1>
        <h1 className={styles.link} style={props.state == "reviews" ? {color: "#FFA8DC"} : {color: "#FFF"}}><a className="cursor-pointer no-underline" href="/reviews">Reviews</a></h1>
      
      </div>
    </div>
  )
}
