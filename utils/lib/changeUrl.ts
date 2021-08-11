export default function changeUrl(title: string, url: string) {
  if (typeof history.pushState != 'undefined') {
    const obj = { Title: title, Url: url }
    history.pushState(obj, obj.Title, obj.Url)
  } else {
    console.warn('Browser does not support HTML5.')
  }
}
