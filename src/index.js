import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import { english } from './languages/languages'


ReactDOM.render(<Game language={english} firstVisit={true}/>,  document.getElementById('root'))