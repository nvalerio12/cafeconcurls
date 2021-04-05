import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Toasts from './utils/Toasts'
import { connect } from 'react-redux'
import { autoSignIn, logoutUser } from './store/actions'
import authHoc from './components/hoc/authHoc'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Contact from './components/contact/Contact'
import Dashboard from './components/dashboard /Dashboard'
import Profile from './components/dashboard /profile/Profile'
import Review from './components/dashboard /review/Review'



class Routes extends Component {

    componentDidMount() {
        this.props.dispatch(autoSignIn());
    }

    handleLogout = () => this.props.dispatch(logoutUser());

    app = auth=> (
        <> 
            <BrowserRouter>
                <Header 
                    auth={auth}
                    logout={this.handleLogout}
                />
                    <Switch>
                        <Route path="/dashboard/profile" component={authHoc(Profile)}/>
                        <Route path="/dashboard/review" component={authHoc(Review, true)}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path='/' component={Home} />
                    </Switch>
                <Footer/>
                <Toasts />
            </BrowserRouter>
        </>
    )
    render() {
        const {auth} = this.props;
        return auth.checkingAuth ? this.app(auth) : '...loading';
    }
}
const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Routes);