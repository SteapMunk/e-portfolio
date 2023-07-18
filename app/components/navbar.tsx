import Link from 'next/link'
import styles from './navbar.module.css'


export default function NavBar() {
    return (
        <div>
            <nav className={styles.mainNav}>
                <div>
                    <Link className={styles.navLink} href="../">Home</Link>
                    <Link className={styles.navLink} href="../about/">About</Link>
                </div>
            </nav>
        </div>
    )
}