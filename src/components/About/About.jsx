import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () =>{
    return(<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img  className={styles.aboutImage }src = {getImageUrl("about/heroboy.png")} alt="about_image" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src ={getImageUrl("about/cursorIcon.png") } alt="pointer_img" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I share expertise in html,css and some part of javascript
                    I'm good at react framework.I used React as my frontend framework 
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                <img src ={getImageUrl("about/serverIcon.png")} alt="server_img" />
                <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I share expertise in html,css and some part of javascript
                    I'm good at react framework.I used React as my frontend framework 
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                <img className={styles.aiIcon} src = {getImageUrl("about/AiIcon.png")} alt="cpu_img"/>
                <div className={styles.aboutItemText}>
                <h3>AI-ML Engineer</h3>
                <p>I share expertise in html,css and some part of javascript
                    I'm good at react framework.I used React as my frontend framework 
                    </p>
                    </div>
                </li>
    
                
            </ul>
        </div>
    </section>
    );
}

export default About
