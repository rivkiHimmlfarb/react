import Button from '../components/Button.jsx'
import { useCounter } from '../hooks/useCounter.js'
import './Home.css'

/**
 * דף הבית — נקודת ההתחלה של היישום.
 */
function Home() {
  const [count, { increment, decrement, reset }] = useCounter(0)

  return (
    <main className="home">
      <section id="home" className="home__hero">
        <h1 className="home__title">פרויקט בריאקט— ברוכים הבאים</h1>
        <p className="home__subtitle">
          מוזמנים ללחוץ על הכפתור ולהתחיל לספור{' '}
        </p>
        <div className="home__actions">
          <Button onClick={increment}>+</Button>
          <Button variant="secondary" onClick={decrement}>
            −
          </Button>
          <Button variant="ghost" onClick={reset}>
            איפוס
          </Button>
        </div>
        <p className="home__count" aria-live="polite">
          המספר: {count}
        </p>
      </section>

      <section id="about" className="home__about">
        <h2>אודות</h2>
        <p>ניתן ללחוץ על הכפתור בכל עת, כדי להגדיל ולהקטין את המונה</p>
      </section>
    </main>
  )
}

export default Home
