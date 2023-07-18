import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main>
      <div className={styles.mainContainer}>
          <div className={styles.imageContainer}>
              <Image src="/../public/starfishHeadshot.jpg" height={500} width={500} alt="Picture of Sam"></Image>
          </div>
          <div className={styles.textContainer}>
              <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
          </div>
      </div>
    </main>
  )
}
