import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'
import './Createpage.css'

export default function Createpage(onSubmit, hidden) {
  const el = createElement('main', { className: 'Createpage', hidden })
  const form = CreateForm(onSubmit)
  el.append(form)

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
