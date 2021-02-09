import createElement from '../../lib/createElement'

import Card from '../Card'
import './Createpage.css'

/*
'main',
{ className: 'CreatePage', hidden: true },
form
)
*/
export default function Createpage() {
  const el = createElement('main', { className: 'Createpage', hidden: true })

  function setCards(cards) {
    const cardElements = cards.map(({ question, answer }) =>
      Card(question, answer)
    )
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}
