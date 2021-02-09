import './CreateForm.css'
import Button from '../Button'
import createElement from '../../lib/createElement'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'Createform',
    innerHTML: `
        <label>Question:
        <textarea class="Createform__textfield" name="question" placeholder="your question"></textarea>
        </label>
        <label>Answer:
        <textarea class="Createform__textfield" name="answer" placeholder="the answer"></textarea>
        <label>Tags:
        <input class="Createform__inputfield" type="text" placeholder="e.g. tag, tag, tag">
        </label>
        `,
  })
  form.append(Button('Create!'))

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value
    onSubmit(question, answer)
  })
  return form
}
