import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ToastsComponent from './utils/Toasts';
import { connect } from 'react-redux';
import { autoSignIn, logoutUser } from './store/actions/index';
import AuthHoc from './components/hoc/authHoc';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Reviews from './components/dashboard/review/Reviews';
import Profile from './components/dashboard/profile/Profile';
import ReviewAddEdit from './components/dashboard/review/add_edits';
import Review from './components/reviews/index';
import Messages from './components/dashboard/messages';


class Routes extends Component {

    componentDidMount() {
        this.props.dispatch(autoSignIn());
    }

    handleLogout = () => this.props.dispatch(logoutUser());

    app = auth => (
        <>
            <BrowserRouter>
                <Header 
                    auth={auth}
                    logout={this.handleLogout}
                />
                <Switch>
                    <Route path="/dashboard/reviews/edit/:id" component={AuthHoc(ReviewAddEdit,true)} />
                    <Route path="/dashboard/reviews/add" component={AuthHoc(ReviewAddEdit,true)} />
                    <Route path="/dashboard/reviews" component={AuthHoc(Reviews,true)} />
                    <Route path="/dashboard/profile" component={AuthHoc(Profile)} />
                    <Route path="/dashboard/messages" component={AuthHoc(Messages,true)} />
                    <Route path="/dashboard" component={AuthHoc(Dashboard)} />
                    <Route path="/reviews/:id" component={Review} />
                    <Route path="/login" component={Login} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
                <ToastsComponent />
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