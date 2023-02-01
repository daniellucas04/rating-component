import styles from "../Form.module.css";

export default function ThankPage({ rating }){
  return(
    <div className={styles.thanksCard}>
      <img src="src\assets\illustration-thank-you.svg" alt="result" />
      <span className={styles.badge}>
        You selected {rating} out of 5
      </span>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.supportDescription}>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </div>
  )
}