// import Button from './components/Button'
// import Togglebutton from './components/Togglebutton'
// import Card from './components/Card'
import createElement from './lib/createElement'
import Grid from './components/Grid'
import Header from './components/Header'
import Homepage from './components/HomePage'
import Bookmark from './components/BookmarkPage'
import Settings from './components/SettingsPage'
import Createpage from './components/CreatePage'
import Navigation from './components/Navigation'

export default function App() {
  const cards = []

  const header = Header('Quizzy')
  const navigation = Navigation(onNavigate)

  const homePage = Homepage()
  const createPage = Createpage(onSubmit, true)
  const settingsPage = Settings()
  const bookPage = createElement(
    'main',
    { className: 'BookPage', hidden: true },
    Bookmark('This is', 'bookmarked one'),
    Bookmark('This is', 'bookmarked two')
  )

  const grid = Grid(
    header,
    homePage,
    bookPage,
    createPage,
    settingsPage,
    navigation
  )

  document.body.append(grid)

  function onSubmit(question, answer) {
    cards.push({ question, answer })
    homePage.setCards(cards)
  }

  function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      bookPage.hidden = true
      createPage.hide()
      settingsPage.hide()
      header.setText('Quizzy')
    }

    if (text === 'Bookmarks') {
      homePage.hide()
      bookPage.hidden = false
      createPage.hide()
      settingsPage.hide()
      header.setText('Bookmarks')
    }

    if (text === 'Create') {
      homePage.hide()
      bookPage.hidden = true
      createPage.show()
      settingsPage.hide()
      header.setText('Create')
    }

    if (text === 'Settings') {
      homePage.hide()
      bookPage.hidden = true
      createPage.hide()
      settingsPage.show()
      header.setText('Settings')
    }
  }
  document.body.append(grid)
}
