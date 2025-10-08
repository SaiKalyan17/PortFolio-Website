/* eslint-disable react/prop-types */

import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({
    project: {title,imageSrc,description,skills,demo,source}}) => {
    return ( 
    <div className={styles.container}>
        {/* <img className={styles.images} src={getImageUrl(imageSrc)} alt="ProjectImages"/> */}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul  className={styles.content}>
            { skills.map((skill,id)=>{
                <li key = {id}>{skill}</li>
                })
            }
        </ul>
        <div className={styles.links}>
        <a   className={styles.link} href={demo}> Demo</a>
        <a className={styles.link} href={source}> source</a>
        </div>

    </div>);
};
export default ProjectCard;


