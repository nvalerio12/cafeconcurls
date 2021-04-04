import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Toasts from './utils/Toasts'
import { connect } from 'react-redux'
import { autoSignIn } from './store/actions'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Contact from './components/contact/Contact'

class Routes extends Component {

    componentDidMount() {
        this.props.dispatch(autoSignIn());
    }

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
                <Toasts />
            </BrowserRouter>
        )
    }
}
const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Routes);