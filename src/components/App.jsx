import { faq } from "../../data"
import Question from "./Question"

function App() {
  return (
    <main>
      <div className="box-container">
        <img
          className="boxImgD"
          src="/images/illustration-box-desktop.svg"
          alt=""
        />
      </div>

      <div className="content-wrapper">
        <div className="image-container-mobile">
          <img
            className="mainImgM"
            src="/images/illustration-woman-online-mobile.svg"
            alt=""
          />
          <img className="bgImgM" src="/images/bg-pattern-mobile.svg" alt="" />
        </div>

        <div className="image-container-desktop">
          <img
            className="mainImgD"
            src="/images/illustration-woman-online-desktop.svg"
            alt=""
          />
          <img className="bgImgD" src="/images/bg-pattern-desktop.svg" alt="" />
        </div>

        <section className="faq-section">
          <h1 className="title bold">faq</h1>
          <div className="accordion">
            {faq.map((item, i) => {
              return <Question key={i} q={item.q} a={item.a} />
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
