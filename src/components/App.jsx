import { faq } from "../../data"
import Question from "./Question"
import illustrationMobile from "/images/illustration-woman-online-mobile.svg"
import illustrationDesktop from "/images/illustration-woman-online-desktop.svg"
import bgPatternMobile from "/images/bg-pattern-mobile.svg"
import bgPatternDesktop from "/images/bg-pattern-desktop.svg"
import boxDesktop from "/images/illustration-box-desktop.svg"

function App() {
  return (
    <main>
      <div className="box-container">
        <img className="boxImgD" src={boxDesktop} alt="" />
      </div>

      <div className="content-wrapper">
        <section className="image-container-mobile">
          <img className="mainImgM" src={illustrationMobile} alt="" />
          <img className="bgImgM" src={bgPatternMobile} alt="" />
        </section>

        <section className="image-container-desktop">
          <img className="mainImgD" src={illustrationDesktop} alt="" />
          <img className="bgImgD" src={bgPatternDesktop} alt="" />
        </section>

        <section className="faq-section">
          <h1 className="title bold">faq</h1>
          <section className="accordion">
            {faq.map((item, i) => {
              return <Question key={i} q={item.q} a={item.a} />
            })}
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
