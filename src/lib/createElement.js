export default function createElement(type, props, ...children) {
  const el = document.createElement(type) // sets the type
  Object.assign(el, props) // element and props are assigned/ copied to el
  children && el.append(...children) // children vorhanden = true, dann auch children anhängen
  return el
}
