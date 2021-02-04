import Button from './components/Button'
import Header from './components/Header'

console.log('hello world')

const header = Header()
const button = Button('Click me')
const button1 = Button('Click this!')

document.body.append(header)
document.body.append(button)
document.body.append(button1)
