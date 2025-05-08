// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"
const Contact = ()=>{
    return(<footer  id = "contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Feel Free to reach us</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email_icon" />
                <a href="mailto:saikalyan0126@gmail.com">Email</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github_icon" />
                <a href="https://github.com/SaiKalyan17">github</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linked_icon" />
                <a href="https://www.linkedin.com/in/arutla-kalyan/">Linkedin</a>
            </li>
        </ul>
    </footer>
    )
}

export default Contact




///Users/SaiKalyan/Portfolio/src