import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'
import createElement from './lib/createElement'
import Navigation from './components/Navigation'
import Togglebutton from './components/Togglebutton'

const { el: headerEl, setText: setHeaderText } = Header()

const navigation = Navigation(onNavigate) //

function onNavigate(text) {
  // loggt den geklickten Button als Text zur Überprüfung aus
  console.log(text) // und ist die verbindung als parameter zwischen der einzelnen component und der App
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  Button('Click me'),
  Card('Question?', 'Answer!'),
  Togglebutton(),
  navigation
)
setHeaderText('Create', 'a new card') // heading and subheading
// der hier übergebene Text wird nur in Snowflake angezeigt
document.body.append(grid)
