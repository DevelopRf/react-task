import styles from "../Layout/Footer.module.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div class="container">
                <div class={styles.wrapper}>
                    <div class={styles.essentialLinks}>
                        <div class={styles.policyService}>
                            <Link to="javascript-void(0)">Privacy policy</Link>
                            <Link to="javascript-void(0)">Terms of service</Link>
                            <Link to="javascript-void(0)">Contact</Link>
                        </div>
                        <div class={styles.social}>
                            <Link to="javascript-void(0)">
                                <FaFacebookF size={24} />
                            </Link>
                            <Link to="javascript-void(0)">
                                <FaInstagram size={24} />
                            </Link>
                            <Link to="javascript-void(0)">
                                <RiTwitterXLine size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}