import arrowIcon from "/images/icon-arrow-down.svg"
import { useState } from "react"

function Question({ q, a }) {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer((prevState) => !prevState)
  }

  return (
    <div>
      <div onClick={toggleAnswer} className="question">
        <h2 className={`${showAnswer ? "bold" : ""}`}>{q}</h2>
        <img
          className={`arrow ${showAnswer ? "turn-arrow" : ""}`}
          src={arrowIcon}
          alt="down-arrow"
        />
      </div>

      <div className={`answer ${showAnswer ? "show" : ""}`}>
        <p>{a}</p>
      </div>
      <hr />
    </div>
  )
}

export default Question
