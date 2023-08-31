import arrowIcon from "/images/icon-arrow-down.svg"
import { useState } from "react"

function Question({ q, a }) {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer((prevState) => !prevState)
  }

  return (
    <section>
      <section onClick={toggleAnswer} className="question">
        <p className={`${showAnswer ? "bold" : ""}`}>{q}</p>
        <img
          className={`arrow ${showAnswer ? "turn-arrow" : ""}`}
          src={arrowIcon}
          alt="down-arrow"
        />
      </section>

      <section className={`answer ${showAnswer ? "show" : ""}`}>
        <p>{a}</p>
      </section>
      <hr />
    </section>
  )
}

export default Question
