import Bookmark from './Bookmark'

export default {
  title: 'Bookmark',
  component: Bookmark,
}

export const base = () =>
  Bookmark('Here comes the Question', 'and here the answer')
