import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'
import './Createpage.css'

export default function Createpage(onSubmit, hidden) {
  const form = CreateForm(onSubmit)
  const el = createElement('main', { className: 'Createpage', hidden }, form)

  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
