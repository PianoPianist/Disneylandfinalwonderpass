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
  var emailsa = jwt_decode(response.credential)
  // console.log(emailsa.email)

  var config={
    Username:"prishabhatia.pb@yahoo.com",
    Password:"A570A1DDD249A048402DBEEE5D1935AB3357",
    Host: "smtp.elasticemail.com",
    Port:2525,
    To : emailsa.email.toString(),
    From : "pianopianist.pp@gmail.com",
    Subject : "Payment Confirmation : Wonderpass",
    Body : "Congrats on your purchase of WonderPass! Here is the QR code that you will have to show at the entrance. <br> <br> <img src='https://cdn.discordapp.com/attachments/1122590461937328290/1123967488649072722/shared_QR.jpg'</img> <br> <br> Best Wishes, <br> Disney Team"
  }

  if (window.Email){
    console.log("yes")
    window.Email.send(config).then(()=>alert("Email sent suxsexfully")).catch(()=>console.log("no"))
  }
  // window.location.href="/thankyou"

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
