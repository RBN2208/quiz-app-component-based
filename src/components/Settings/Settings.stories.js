import Settings from './Settings'

export default {
  title: 'Settings',
  component: Settings,
}

export const base = () => Settings('Mike', '25').settings
