/**
 * 
 * @param {Image} img 
 */
function fit(img) {
  if (img.naturalWidth <= 240 || img.classList.contains('meme')) return

  const parent = img.parentElement
  if (!parent || parent.tagName.toLowerCase() === 'a') return
  const src = img.getAttribute('src')
  const a = document.createElement('a')
  a.setAttribute('href', src)
  a.setAttribute('target', '_blank')
  parent.insertBefore(a, img)
  parent.removeChild(img)
  a.appendChild(img)
  a.style.display = 'block'
  a.addEventListener('click', preview)
  img.style.margin = 'auto'
  img.classList.add('click-to-zoom')
}

/**
 * 
 * @param {Event} event 
 */
function preview(event) {
  event.preventDefault()
  const img = event.target
  const container = document.getElementById('preview')
  const centered = document.querySelector('#preview img.preview')
  container.classList.add('on')
  container.querySelector('a.new-tab-btn').setAttribute('href', img.src)
  centered.setAttribute('src', img.src)
  centered.setAttribute('width', img.naturalWidth * devicePixelRatio)
}

document.addEventListener('DOMContentLoaded', () => {
  {
    const container = document.getElementById('preview')
    if (container) {
      container.addEventListener('click', () =>
        document.getElementById('preview').classList.remove('on'))
      container.querySelector('.new-tab-btn').addEventListener(
        'click', event => event.stopPropagation())
    }
  }
  document.querySelectorAll('article.post.full img').forEach(img => {
    if (img.complete)
      fit(img)
    else
      img.addEventListener('load', () => fit(img), { once: true })
  })

  document.querySelectorAll('code').forEach(code => {
    if (code.clientWidth > code.parentElement.clientWidth) {
      console.log(code)
      code.parentElement.style.overflowWrap = 'break-word'
    }
  })

  /**
   * 
   * @param {Event} event 
   */
  function copy(event) {
    const button = event.target
    const element = button.parentElement.querySelector('.highlight')
    const selection = window.getSelection()
    if (!selection) return
    const range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    button.textContent = 'Copied'
    button.disabled = true
    selection.removeAllRanges()

    element.addEventListener('mouseout', () => {
      button.disabled = false
      button.textContent = 'Copy'
    }, { once: true })
  }

  document.querySelectorAll('div.highlighter-rouge').forEach(container => {
    const b = document.createElement('button')
    b.textContent = 'Copy'
    // a.setAttribute('href', 'javascript:void(0)')
    container.appendChild(b)
    b.addEventListener('click', copy)
  })

  const main = document.querySelector('main')
  if (!main) return
})