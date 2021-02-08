import './Togglebutton.css'
import createElement from '../../lib/createElement'

export default function Togglebutton() {
  const inputEl = createElement('input')
  inputEl.setAttribute('type', 'checkbox')

  const spanEl = createElement('span', { className: 'Togglebutton__slider' })

  const labelEl = createElement(
    'label',
    { className: 'Togglebutton' },
    inputEl,
    spanEl
  )

  inputEl.addEventListener('change', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', switchToTheme)
  })

  return labelEl
}
