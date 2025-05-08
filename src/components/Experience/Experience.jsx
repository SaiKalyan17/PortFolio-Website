import React from "react";
import { getImageUrl } from "../../utils";
import history from "../data/history.json";
import skills from "../data/skills.json";
import styles from "./Experience.module.css";
const Experience = ()=>{
    return(
    <section className={styles.container} id = "experience">
    <h2 className={styles.title}> Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
        {skills.map((skill,id) => {
            return( 
                <div key = {id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src = {getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
                </div>
            );
                })}
                </div>
            <ul className={styles.history}>
            {history.map((historyItems,id)=>{
                return (
                    <li key = {id} className={styles.historyItems}>
                <img src = {getImageUrl(historyItems.imageSrc)} alt="`${history.organisation} logo`}" />
                <div className={styles.historyItemsDetails}>
                    <h3>{`${historyItems.role},${historyItems.organisation}`}</h3>
                    <p>{`${historyItems.startDate},${historyItems.endDate}`}</p>
                    <ul>
                    {historyItems.experiences.map((exp,id) =>{
                        return <li key = {id}>{exp}</li>;
                    })}
                    </ul>
                </div>
                </li>
                );
            })}
            </ul>
    </div>
    </section>
    );
}
export default Experience