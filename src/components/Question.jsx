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
        <h4 className={`${showAnswer ? "bold" : ""}`}>{q}</h4>
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
