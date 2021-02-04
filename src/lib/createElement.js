export default function createElement(type, props, ...children) {
  const el = document.createElement(type)
  Object.assign(el, props) // wo kommt propbs her? el=type, props=props?
  children && el.append(...children) // children vorhanden = true, dann auch children anhängen
  return el
}
