# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](/public/faq-accordion-ss.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

First time using css transitions on a project :D

```css
.arrow {
  transition: rotate 0.5s;
}

.arrow:hover {
  rotate: 180deg;
}

.answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in;
}

.answer.show {
  max-height: 50px;
}
```

Ternary operators for classes

```js
<section onClick={toggleAnswer} className="question">
  <p className={`${showAnswer ? "bold" : ""}`}>{q}</p>
  <img
    className={`arrow ${showAnswer ? "turn-arrow" : ""}`}
    src={arrowIcon}
    alt="down-arrow"
  />
</section>
```

### Continued development

Mobile-first workflow. Felt a bit strange at the start since this is my first time trying it but I definently think it helped so from now on, I'll continue doing that until I get better at it and just styling in general.

## Author

- Frontend Mentor - [@nataliadgalindo](https://www.frontendmentor.io/profile/nataliadgalindo)
