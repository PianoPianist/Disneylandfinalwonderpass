"use client"
import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./plans.module.css"
import doosraStyles from "../about/about.module.css"
import Header from "./Header"
export default function Home() {

  // export plan;

  return (
    <div>
      <Navbar state="plans"/>

      <Header state="1" />
      <h1 className={styles.homeHeading} style={{fontSize: "3.5vw", display: "flex", alignItems: "center", marginTop: "3vh"}}>
      <span className={styles.gradient1}>PLANS</span>
    </h1>
      <div className={mainstyle.plans}>
        <div className={mainstyle.card} id={mainstyle.single}>
          <h1 className={mainstyle.cardHeading}>Basic</h1>
          <ul className={mainstyle.ul}>
            
          <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>2 People</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Scanning</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "7.5vw", listStyle: "disc"}}>Video Access</p></li>
          </ul>
          <p className={mainstyle.paraMoney}>$220</p>
          <a className={mainstyle.cardButton} href="./purchase/single"  ><span className={mainstyle.btnText}>Choose</span></a>
       </div>
        <div className={mainstyle.card} id={mainstyle.family}>
          <h1 className={mainstyle.cardHeading}>Premium</h1>
          <p className={mainstyle.para1}>Most Popular</p>
          <ul className={mainstyle.ul}>
          <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>6 People</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Scanning</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "7.5vw", listStyle: "disc"}}>Video Access</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "10vw", listStyle: "disc"}}>Dynamic Itinerary System</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "12.5vw", listStyle: "disc"}}>Rent Golf Cart for Free</p></li>
          </ul>
          <p className={mainstyle.paraMoney} style={{top: "9.5vw"}}>$640</p>
          <a className={mainstyle.cardButton} href="./purchase/family"  ><span className={mainstyle.btnText}>Choose</span></a>
        </div>
        <div className={mainstyle.card} id={mainstyle.duo}>
          <h1 className={mainstyle.cardHeading}>Standard</h1>
          <ul className={mainstyle.ul}>
          <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>4 People</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Scanning</p></li>
            
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "7.5vw", listStyle: "disc"}}>Video Access</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "10vw", listStyle: "disc"}}>Dynamic Itinerary System</p></li>
          </ul>
          <p className={mainstyle.paraMoney}>$420</p>
          <a className={mainstyle.cardButton} href="./purchase/duo" ><span className={mainstyle.btnText}>Choose</span></a>
        </div>
      </div>
    </div>
  )
}
