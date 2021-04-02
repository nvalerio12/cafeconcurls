import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Contact from './components/contact/Contact'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path='/' component={Home} />
                    </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Routes