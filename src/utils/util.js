/**
 * @description 复制到剪贴板
 * @param {String} text
 */
function copyToClipboard(text) {
  const input = document.createElement('textarea')
  input.style.position = 'fixed'
  input.style.opacity = 0
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
}

function setLocalData(params = {}, key) {
  if (Object.keys(params).length) {
    const paramsStr = JSON.stringify(params)
    localStorage.setItem(key, paramsStr)
  }
}

function getLocalData(key) {
  const result = JSON.parse(localStorage.getItem(key))
  return result
}

function extname(path) {
  // http://localhost:3005/%E6%97%A5%E5%90%91%E3%81%AA%E3%81%A4/CAWD-279/cawd00279jp-1.jpg
  const pathArr = path.split('/')
  const file = pathArr.at(-1)
  const fileArr = file.split('.')
  return file.includes('.') ? `.${fileArr[1]}` : ''
}

export {
  copyToClipboard,
  extname,
  setLocalData,
  getLocalData
}
