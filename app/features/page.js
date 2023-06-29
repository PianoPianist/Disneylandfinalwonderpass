"use-client"
import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from './features.module.css'
import Card from "./Card.js"
export default function Home() {
  return (
    <div>
      <Navbar state="features"/>

      <div className={mainstyle.container} style={{marginLeft: "10vw", marginTop: "5vw"}}>
          <h1 className={styles.homeHeading}>
            <span className={styles.gradient1}>UNLOCK YOUR POWER</span>
          </h1>
          <div className={mainstyle.cardcontainer}>
        <Card img = "https://cdn.discordapp.com/attachments/1122590461937328290/1123132678204575774/Group_7.png" title="Scanning" text="You dont have to scan a pass instead it just sees your face and lets you in"/>
        <Card img="https://cdn.discordapp.com/attachments/1122590461937328290/1123132678523338872/Group_8.png"title="Video Access" text="Access your videos from your app of your face in ride"/>
        <Card img="https://cdn.discordapp.com/attachments/1122590461937328290/1123132678917607476/Group_9.png"title="Seat Selection" text="Seat selection you can do on your own hassle free and with ease"/>
        <Card img="https://cdn.discordapp.com/attachments/1122590461937328290/1123132679190233108/Group_10.png"title="Rent Golfcart For Free" text="Rent a golf cart for free that transports you from one place to another"/>

        </div>
      </div>
    </div>
  )
}