import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";
import Hasan from '../../../hasan.jpg'
import {Avatar,Button} from '@material-ui/core'

export const Home = () => {
  return (
    <div>
     
      <section className={styles.home}>
      {/* <div className={styles.avatar}>
        <img src={Hasan} alt={contactData.avatar.alt} />
      </div> */}
      <div className={styles.avatar}>
      <Avatar style={{marginTop:60 ,width:320,height:320}} src={Hasan}></Avatar>
      </div>
      <section className={styles.hello}>
        <p>Merhabalar</p>
        <p>Hakkımda</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="My resume" target="nav_resume" />
        <RoundButton text="My works" target="nav_projects" />
        <RoundButton text="My skills" target="nav_resume" /> 
        
      </section>
      <p className={styles.intro}>
        Web,Android geliştiricisi !
        <br />
        <br />Halen öğrenciyim , java ve javascript geliştiricisi olarak devam ediyorum.
      </p>
    </section>
    </div>
  );
};
