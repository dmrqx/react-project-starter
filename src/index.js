import React from 'react'
import { render } from 'react-dom'

import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import App from 'components/App'

const rootComponent = <App />
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
