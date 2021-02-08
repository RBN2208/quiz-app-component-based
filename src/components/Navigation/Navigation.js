import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const buttonsConfig = [
  // this is an array with objects for the nav elements. property and prop.value
  { svgPath: homeSVG, text: 'Home' }, // path to the svg and the text for each button
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  // navigation steht für sich alleine als Component. Über den Parameter, hier "onNavigate"
  // kriegt index.js zugriff auf die Funktion.

  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    // { src: xxx, alt: xxx } this is called destructuring assignment
    // man könnte auch .map(button => const value = { src: xxx, alt: xxx }) schreiben
    const button = createElement('img', { src: svgPath, alt: text }) // jeder button wird als img dargestellt mit prop.values
    button.addEventListener('click', () => onNavigate(text)) // bei click wird über onNavigate text nach draussen gegeben
    return button // und später die seiten getogglet
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons) // creates nav and spreads all buttons in nav
  return el
}
