import styles from 'styles/hero.module.css'

export default function Hero ({ imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>CUBE</h1>
        <p className={styles.subtitle}>アウトプットしていくサイト</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
