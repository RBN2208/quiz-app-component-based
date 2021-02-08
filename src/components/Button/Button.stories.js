import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Hello')
export const longText = () => Button('Hello, this is a long text')
export const longerText = () =>
  Button('Hello, this is a long text and much longer than the others')
