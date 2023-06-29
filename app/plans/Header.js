import React from 'react'
import styles from "../home.module.css"
import mainstyle from "./plans.module.css"

export default function Header(props) {
  return (
    <div>
    <div className={mainstyle.content}>
    <div className={mainstyle.dot1} style={ props.state === "1" ? {background: "#fff", border: "none"} : {background: "#191825", border: "3px solid #fff"}}><a href="/plans" /></div>
    <p className={mainstyle.para} style={{fontFamily: 'Poppins'}}><a href="/plans">Choose a plan</a></p>
    <div className={mainstyle.dot2} style={ props.state === "2" ? {background: "#fff", border: "none"} : {background: "#191825", border: "3px solid #fff"}}><a href="/purchase" /></div>
    <p className={mainstyle.para2} style={{fontFamily: 'Poppins'}}><a href="/purchase" >Purchase</a></p>
    <div className={mainstyle.dot3} style={ props.state === "3" ? {background: "#fff", border: "none"} : {background: "#191825", border: "3px solid #fff"}}><a href="/plan" /></div>
    <p className={mainstyle.para3} style={{fontFamily: 'Poppins'}}>Confirm Payment</p>
    <div className={mainstyle.line} />
</div></div>
  )
}
