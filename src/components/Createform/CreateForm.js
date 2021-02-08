import './CreateForm.css'
import createElement from '../../lib/createElement'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'Createform',
    innerHTML: `
        <label>Question:
        <textarea class="Createform__textfield" "type="text" placeholder="your question"></textarea>
        </label>
        <label>Answer:
        <textarea class="Createform__textfield" type="text" placeholder="the answer"></textarea>
        <label>Tags:
        <input class="Createform__inputfield" type="text" placeholder="e.g. tag, tag, tag">
        </label>
        <button class="Createform__button">Create</button>
        `,
  })
  el.addEventListener('submit', event => {
    event.preventDefault()
  })
  return el
}
