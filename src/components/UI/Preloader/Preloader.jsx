import React from "react";
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif';

export const Preloader = (props) => {
    return (
        <div className={styles.preloaderContainer}>
            <img src={ preloader } alt="preloader" className={styles.preloader} />
        </div>
    )
}