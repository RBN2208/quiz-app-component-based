// import Button from './components/Button'
// import Togglebutton from './components/Togglebutton'
// import Card from './components/Card'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm'
import Header from './components/Header'
import Homepage from './components/HomePage'
import Bookmark from './components/Bookmark'
import Settings from './components/Settings'
import Navigation from './components/Navigation'

const cards = []

const header = Header('Quizzy')

const navigation = Navigation(onNavigate)

const form = CreateForm(onSubmit)

const homePage = Homepage()

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const settings = Settings('Peter Pan', '50')

const bookPage = createElement(
  'main',
  { className: 'BookPage', hidden: true },
  Bookmark('This is', 'bookmarked one'),
  Bookmark('This is', 'bookmarked two')
)
const settingsPage = createElement(
  'main',
  { className: 'settingsPage', hidden: true },
  settings
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  homePage,
  bookPage,
  createPage,
  settingsPage,
  navigation
)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.show()
    bookPage.hidden = true
    createPage.hidden = true
    settingsPage.hidden = true
    header.setText('Quizzy')
  }

  if (text === 'Bookmarks') {
    homePage.hide()
    bookPage.hidden = false
    createPage.hidden = true
    settingsPage.hidden = true
    header.setText('Bookmarks')
  }

  if (text === 'Create') {
    homePage.hide()
    bookPage.hidden = true
    createPage.hidden = false
    settingsPage.hidden = true
    header.setText('Create')
  }

  if (text === 'Settings') {
    homePage.hide()
    bookPage.hidden = true
    createPage.hidden = true
    settingsPage.hidden = false
    header.setText('Settings')
  }
}
document.body.append(grid)
