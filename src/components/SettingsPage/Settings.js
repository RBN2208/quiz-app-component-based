import createElement from '../../lib/createElement'
import Togglebutton from '../Togglebutton'
import './Settings.css'

export default function Settings() {
  const el = createElement('main', { className: 'Settings', hidden: true })

  const profileContainer = createElement('div', {
    className: 'Settings__profile',
  })
  profileContainer.innerHTML = `
  <h2>Austin Powers</h2>
  <span>Quizrang: Goldständer</span>  
  `
  const darkmodecontainer = createElement('div', {
    className: 'Settings__darkmodecontainer',
  })
  darkmodecontainer.innerHTML = ` 
  <span>Darkmode</span>
  `
  const darkmode = Togglebutton()

  darkmodecontainer.append(darkmode)
  el.append(profileContainer, darkmodecontainer)

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
