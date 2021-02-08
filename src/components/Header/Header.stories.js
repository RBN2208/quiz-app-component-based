import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

export const base = () =>
  Header('Wir übergeben an den Header', 'das Headerelement "el"').el
// der hier übergegebene text wird nur in storybook angezeigt
