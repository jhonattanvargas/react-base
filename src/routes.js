//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'



//Components for Routes
import App from './components/App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
    </Switch>
</App>


export default AppRoutes