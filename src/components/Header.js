import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', { className: 'Header' })
  el.innerHTML = `
    <h1 class="Header__title">
    ${title}
    <span class="Header__subtitle">${subtitle}</span>
    </h1>
    `
  return el
}
