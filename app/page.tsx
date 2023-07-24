import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from './page.module.css'

const poppins = Poppins({weight: "800", subsets: ['latin']})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
          <div className={styles.imageContainer}>
              <div className={styles.imageBorder}>
                  <Image className={styles.image} src="/../public/starfishHeadshot.jpg" height={500} width={500} alt="Picture of Sam"></Image>
              </div>
          </div>
          <div className={styles.textContainer}>
              <div className={styles.textBorder}>
                  <h3 className={poppins.className}>
                      Welcome to my e-portfolio. My name is Sam Addison and I am a third year software engineering student at the University of Victoria.
                      In this e-portfolio you will find some of my personal and professional accomplishments.
                  </h3>
              </div>
          </div>
      </div>
    </main>
  )
}
