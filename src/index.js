import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'

console.log('hello world')

const header = Header('Yes!', 'just some text')
const button = Button('Click me')
const button1 = Button('Click this!')
const card = Card()

document.body.append(header)
document.body.append(button)
document.body.append(button1)
document.body.append(card)
