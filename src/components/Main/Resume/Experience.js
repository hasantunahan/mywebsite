import React from "react";
import styles from "./Experience.module.css";
import {Paper } from '@material-ui/core'

export const Experience = props => {
  return (
  
      <section className={styles.detail}>
      <img style={{width : 235,height:120,padding:10 ,objectFit :'contain'}} src={props.img} />
      <p>
        {props.job} - {props.company}
      </p>
      <p>{props.time}</p>
      <p>​{props.description}</p>
      <hr></hr>
    </section>
   
  );
};
