import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import reducers from './reducers'
import './config'

import './components/main.css'

import AuthRoute from './containers/authroute/authroute'
import EmployerProfile from './containers/employerProfile/employerProfile'
import CandidateProfile from './containers/candidateProfile/candidateProfile'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'

const store = createStore(
    reducers, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/employer/profile' component={EmployerProfile}></Route>
                    <Route path='/candidate/profile' component={CandidateProfile}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route component={Dashboard}>

                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
