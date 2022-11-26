import React from "react";
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif';

export const Preloader = (props) => {
    return (
        <img src={ preloader } alt="preloader" className={styles.preloader} />
    )
}