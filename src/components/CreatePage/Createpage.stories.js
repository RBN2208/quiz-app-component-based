import Createpage from './Createpage'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Pages/Createpage',
  component: Createpage,
}

export const base = () => Createpage(action('onSubmit')).el
