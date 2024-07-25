import React from 'react'
import styles from "./Description.module.scss"
import { Link } from 'react-router-dom/dist'

export default function Description() {
    return (
        <section class={styles.description}>
            <div class="container">
                <div class={styles.wrapper}>
                    <div class={styles.cards}>
                        <div class={styles.card}>
                            <div class={styles.icon}>
                                <img src="./images/description/cars.png" alt="" />
                            </div>
                            <h2>You can obtain any car from our showroom both with credit and cash purchase</h2>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.icon}>
                                <img src="./images/description/guarantee.png" alt="" />
                            </div>
                            <h2>Every car purchased from our showroom comes with a 5-year or 155,000 km warranty</h2>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.icon}>
                                <img src="./images/description/service.png" alt="" />
                            </div>
                            <h2>You have the opportunity to get your cars repaired at our showroom's service department.
                            </h2>
                        </div>
                    </div>
                    <div class={styles.btn}><Link to="javascript-void(0)">Learn More</Link></div>
                </div>
            </div>
        </section>
    )
}
