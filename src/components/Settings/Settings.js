import createElement from '../../lib/createElement'
import './Settings.css'

export default function Settings(userName, userAge) {
  const el = createElement('section', { className: 'Settings' })

  setName(userName, userAge)

  function setName(userName, userAge) {
    el.innerHTML = `
      <h3>
        ${userName}
        <span>${userAge}</span>
      </h3>
    `
  }

  return {
    el,
    setName,
  }
}
