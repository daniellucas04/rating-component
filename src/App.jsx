import { useState } from 'react';
import './App.css';
import ThankPage from './components/ThankPage';
import styles from "./Form.module.css";

function App() {
  const numberOfButtons = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setIsSubmitted(true);
  }

  
  return isSubmitted ? (
    <ThankPage rating={rating} />
  )
  : (
    <div className="App">
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.star}>
          <img src="src\assets\icon-star.svg" alt="Star" />
        </div>
        <section className={styles.textArea}>
          <h1 className={styles.title}>How did we do?</h1>
          <p className={styles.description}>
            Please let us know how we did with your support request. All feedback is appreciated to help us imporove our offering!
          </p>
        </section>
        <div className={styles.group}>
          {numberOfButtons.map((rating) => (
            <button key={rating} type='button' className={styles.button} onClick={() => setRating(rating)}>
              {rating}
            </button>
          ))}
        </div>
        <button disabled={!rating} className={styles.submitButton}>Submit</button>
      </form>
    </div>
  )
}

export default App
