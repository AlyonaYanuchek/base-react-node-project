import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import Header from './components/Header'

export default (
    <Route path="/" component={Header}></Route>
)
