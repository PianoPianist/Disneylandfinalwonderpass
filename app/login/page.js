"use client"
import React, {useState} from 'react'
import Navbar from '@/components/Navbar';
import styles from './login.module.css'
// import GoogleLogin from 'react-google-login';
import {useEffect} from 'react'
import jwt_decode from "jwt-decode"
import home from "../home.module.css"
import Header from "../plans/Header"


export default function Login() {
  // const handlefailure = (result) =>{
  //   console.log(result)
  // }
 function handlelogin(response){
  // var emailsa = jwt_decode(response.credential)
  // console.log(emailsa.email)

  var config={
    Username:"prisha_bhatia@outlook.com",
    Password:"CE1868FA5A9DA0EF0B3E6ED159671E7B6849",
    Host: "smtp.elasticemail.com",
    Port:2525,
    To : "pianopianist.pp@gmail.com",
    From : "prisha_bhatia@outlook.com",
    Subject : "Payment Confirmation : Wonderpass",
    Body : "And this is the body"
  }

  if (window.Email){
    console.log("yes")
    window.Email.send(config).then(()=>alert("Email sent suxsexfully"))
  }
  window.location.href="/thankyou"

 }
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"161640903111-dojlp361b26nmkereipqeb8hkndp2n7t.apps.googleusercontent.com",
      callback:handlelogin

    })
    google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      {theme:"dark",size:"large",color:"red"}
    )
  })
  return (
    <div>
    <Navbar className={styles.nav} />
    <Header state="2"/>
    <h1 className={home.homeHeading} style={{textAlign:"center",marginTop:"10vh"}}>
      
      <span className={home.gradient1}>LOG IN</span> </h1>
    <div className={styles.center}>
    <div id="signindiv" className={styles.finclass}>
    </div>
    </div>
    {/* <button className={styles.cardButton}><span className="btnText">Mail</span></button> */}
    </div>
  )
}
