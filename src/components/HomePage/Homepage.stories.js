import Homepage from './Homepage'

export default {
  title: 'Pages/Homepage',
  component: Homepage,
}

export const base = () =>
  Homepage([
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
  ]).el
