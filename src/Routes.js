import React, { Component } from 'react';
import { Switch, Router, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                    <Switch>

                    </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Routes