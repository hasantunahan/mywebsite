import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";
import Hasan from '../../../hasan.jpg'
import { Avatar, Button, Grid } from '@material-ui/core'
import HomeCard from './HomeCard'
import { socialmedia as socialData } from "../../../assets/data/socialmedia";


export const Home = () => {
  return (
    <div>

      <section className={styles.home}>
        {/* <div className={styles.avatar}>
        <img src={Hasan} alt={contactData.avatar.alt} />
      </div> */}
        <div className={styles.avatar}>
          <Avatar style={{ marginTop: 50, width: 320, height: 320 }} src={Hasan}></Avatar>
        </div>
        <section className={styles.hello}>
          <p style={{marginTop:-20}}>Merhabalar</p>
        </section>
        {/*  <section className={styles.button_group}>
        <RoundButton text="My resume" target="nav_resume" />
        <RoundButton text="My works" target="nav_projects" />
        <RoundButton text="My skills" target="nav_resume" /> 
        
      </section> */}
        <p>Hakkımda</p>
        <p className={styles.intro}>
          Web,Android geliştiricisi !
        <br />
          <br />Halen öğrenciyim , java ve javascript geliştiricisi olarak devam ediyorum.
      </p>
        <br></br>
        <br></br>
        {<Grid
          style={{marginLeft : -48}}
          alignItems="center"
          justify="center"
          container >
          {socialData["social"].map(a => (
            <HomeCard
              name={a.name}
              img={a.img}
            ></HomeCard>
          ))}
        </Grid>}


      </section>
    </div>
  );
};
