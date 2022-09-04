
```js
// options
var vm = document.querySelector('.starDetailWrapper').__vueParentComponent
vm.data
vm.proxy
vm.setupState
vm.ctx

// setup
var vm = document.querySelector('.starList').__vueParentComponent

vm.setupState
vm.devtoolsRawSetupState
vm.ctx._.devtoolsRawSetupState === vm.devtoolsRawSetupState

// var keys = Object.keys(vm)
[
  'uid',
  'vnode',
  'type',
  'parent',
  'appContext',
  'root',
  'next',
  'subTree',
  'effect',
  'update',
  'scope',
  'render',
  'proxy',
  'exposed',
  'exposeProxy',
  'withProxy',
  'provides',
  'accessCache',
  'renderCache',
  'components',
  'directives',
  'propsOptions',
  'emitsOptions',
  'emit',
  'emitted',
  'propsDefaults',
  'inheritAttrs',
  'ctx', // 
  'data',
  'props',
  'attrs',
  'slots',
  'refs',
  'setupState',
  'setupContext',
  'suspense',
  'suspenseId',
  'asyncDep',
  'asyncResolved',
  'isMounted',
  'isUnmounted',
  'isDeactivated',
  'bc',
  'c',
  'bm',
  'm',
  'bu',
  'u',
  'um',
  'bum',
  'da',
  'a',
  'rtg',
  'rtc',
  'ec',
  'sp',
  '__VUE_DEVTOOLS_UID__',
  '__VUE_DEVTOOLS_SLOW__',
  'n',
  'f'
]
```
