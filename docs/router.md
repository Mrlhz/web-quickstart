
```js

import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

Object.keys(route)
// (9) ['path', 'name', 'params', 'query', 'hash', 'fullPath', 'matched', 'meta', 'redirectedFrom']

Object.keys(router)
(20) ['currentRoute', 'listening', 'addRoute', 'removeRoute', 'hasRoute', 'getRoutes', 'resolve', 'options', 'push', 'replace', 'go', 'back', 'forward', 'beforeEach', 'beforeResolve', 'afterEach', 'onError', 'isReady', 'install', '__hasDevtools']


```