import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'


export default function NavBar() {
    return (
        <div>
            <nav className={styles.mainNav}>
                <div className={styles.navObjects}>
                    <div className={styles.navHome}>
                        <Link  href="../">
                            <Image className={styles.navLink} src="/../public/homeIcon.png" height={48} width={48} alt="homeIcon"></Image>
                        </Link>
                    </div>
                    <div className={styles.navPages}>
                        <Link className={styles.navLink} href="../about/">About</Link>
                        <Link className={styles.navLink} href="../projects/">Projects</Link>
                        <Link className={styles.navLink} href="../contact/">Contact Info</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}