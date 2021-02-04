import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'
import createElement from './lib/createElement'

const grid = createElement(
  'div',
  {
    className: 'appGrid',
  },
  Header('Yes!', 'just some text'),
  Button('Click me'),
  Button('Click this!'),
  Card('Question?', 'Answer!')
)

document.body.append(grid)
