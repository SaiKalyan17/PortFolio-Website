import React from 'react';
import styles from "./Hero.module.css";
const Hero  = () =>{
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Sai Kalyan</h1>
            <p className={styles.description}>a tech-savvy undergraduate student at KL University. You're passionate about programming, particularly in Python and Java, and you enjoy solving problems related to data structures, machine learning, and web development. </p>
        <a  className={styles.contactBtn} href="mailto:myemail@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImage} src ="src/assets/hero/Passport.png" alt='hero_image'></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
    );
}

export default Hero