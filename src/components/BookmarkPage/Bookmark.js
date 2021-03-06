import './Bookmark.css'
import createElement from '../../lib/createElement'
import Button from '../Button'

export default function Bookmark(question, answer) {
  // function for card-create
  const questionEl = createElement('h2', { innerText: question }) // create h2 for card
  const buttonEl = Button('Show answer') // import Button-function ('SOMETEXT in here')
  const answerEl = createElement('p', { hidden: true, innerText: answer }) // create answer for card

  buttonEl.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden // click = hidden? do not hidden! click2 = not hidden? do hidden
  })

  // create ( type, props, ...children)
  const el = createElement(
    'section', // type
    { className: 'Card-B' }, // props
    questionEl, // ...children
    buttonEl, // ...children
    answerEl // ...children
  )

  return el
}
