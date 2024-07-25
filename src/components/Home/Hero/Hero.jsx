import React from 'react'
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section class={styles.hero} style={{backgroundImage: 'url(./images/hero-bg.jpg)'}}>
            <div class={styles.heading}>
                <h1>Your Dream Car, In Our Showroom</h1>
                <h3>Trust Us</h3>
            </div>
        </section>
    )
}
