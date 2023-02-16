import React from 'react'
import banner from './assets/banner.png'
import styles from '../Banner/banner.module.css'

function Banner() {
    return (
        <div className={styles.banner}>
            <img src={image} alt="Bannière" />
            <div className={styles.banner-title}>
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>    
    )
}

export default Banner