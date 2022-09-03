// vant/packages/vant/src/utils/create.ts

function isString(str) {
  return typeof str === 'string'
}

function genBem(name = '', mods = '') {
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
 * @description bem helper
 * bem() // 'v-button'
 * bem('normal') // v-button__normal
 * bem('text') // v-button__text
 * bem({ disabled: true }) // v-button v-button--disabled
 * bem('text', { disabled: true }) // v-button__text v-button__text--disabled
 * bem(['disabled', 'primary']) // v-button v-button--disabled v-button--primary
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
    createBEM(prefixedName)
  ]
}
