// vant/packages/vant/src/utils/create.ts

function isString(str) {
  return typeof str === 'string'
}

function genBem(name = '', mods) {
  if (!mods) {
    return ''
  }

  if (isString(mods)) {
    return ` ${name}--${mods}`
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + genBem(name, item), '')
  }

  return Object.keys(mods)
    .reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ''), '')
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export function createBEM(name = '') {
  return (el, mods) => {
    let elName = el
    let elMods = mods
    if (el && !isString(el)) {
      elMods = el
      elName = ''
    }

    elName = elName ? `${name}__${elName}` : name

    return `${elName}${genBem(elName, elMods)}`
  }
}

export function createNamespace(name = '') {
  const prefixedName = `v-${name}`
  return [
    prefixedName,
    createBEM(prefixedName),
  ]
}
