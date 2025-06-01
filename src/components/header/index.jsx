import styles from './style.module.css'

export default function Header({time, bestTime, previousTime, isCounting, openModal}) {
  return (
    <header className={styles.header}>
      <h1>Memory Game!</h1>
      <div className={styles.scores}>
        {
          (time || bestTime || previousTime) &&
          <>
            {/* if time is running, show that, else if there's a previous time, show the previous time */}
            {
              isCounting && time != null
              ? <strong>Time: {time}</strong>
              : previousTime != null && <strong>Previous: {previousTime}</strong>
            }
            {bestTime != null && <strong>Best Time: {bestTime}</strong>}
          </>
        }
        <button onClick={openModal}>
          <strong>Help</strong>
        </button>
      </div>
    </header>
  )
}