// import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'
import Bookmark from './components/Bookmark'
import CreateForm from './components/CreateForm'
import Settings from './components/Settings'
import createElement from './lib/createElement'
import Navigation from './components/Navigation'
// import Togglebutton from './components/Togglebutton'
const cards = []

const { el: headerEl } = Header('Quizzy', 'funny questions')
// setHeaderText('Create', 'a new card')

const navigation = Navigation(onNavigate)
const form = CreateForm(onSubmit)
const { el: settingsEl } = Settings('Peter Pan', '50')

const homePage = createElement('main', { className: 'HomePage', hidden: false })

const bookPage = createElement(
  'main',
  { className: 'BookPage', hidden: true },
  Bookmark('This is', 'bookmarked one'),
  Bookmark('This is', 'bookmarked two')
)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const settingsPage = createElement(
  'main',
  { className: 'settingsPage', hidden: true },
  settingsEl
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  bookPage,
  createPage,
  settingsPage,
  navigation
)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homePage.innerHTML = ''
  homePage.append(...cardElements)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    bookPage.hidden = true
    createPage.hidden = true
    settingsPage.hidden = true
  }

  if (text === 'Bookmarks') {
    homePage.hidden = true
    bookPage.hidden = false
    createPage.hidden = true
    settingsPage.hidden = true
  }

  if (text === 'Create') {
    homePage.hidden = true
    bookPage.hidden = true
    createPage.hidden = false
    settingsPage.hidden = true
  }

  if (text === 'Settings') {
    homePage.hidden = true
    bookPage.hidden = true
    createPage.hidden = true
    settingsPage.hidden = false
  }
}
document.body.append(grid)
