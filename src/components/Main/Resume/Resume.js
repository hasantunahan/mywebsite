import React from "react";
import styles from "./Resume.module.css";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { skills as skillData } from "../../../assets/data/skills";
import { experience as experienceData } from "../../../assets/data/experience";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {Paper} from '@material-ui/core'

export const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1>Tecrübe</h1>
      <section className={styles.container}>
        <section className={styles.experience}>
          <article className={styles.item}>
            
            <h2>Şirketler​​</h2>
           
            <section>
              {experienceData["work"].map(data => (
                <Experience
                  img={data.img}
                  job={data.job}
                  company={data.company}
                  time={data.time}
                  description={data.description}
                />
              ))}
            </section>
          </article>
          <article className={styles.item}>
            <h2>Eğitim</h2>
            <section>
              {experienceData["education"].map(data => (
                <Experience
                  img={data.img}
                  job={data.job}
                  company={data.company}
                  time={data.time}
                  description={data.description}
                />
              ))}
            </section>
          </article>
        </section>
        <section className={styles.skill}>
          <Skill icon={faCode} type="Code Skill" skillData={skillData["Coding"]} />
          <Skill
            icon={faGlobe}
            type="Diller"
            skillData={skillData["Language"]}
          />
        </section>
      </section>
    </section>
  );
};
