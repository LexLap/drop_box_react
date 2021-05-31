import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/main/Header';
import LoginPage from '../components/login/LoginPage';
import LoginContextProvider from '../context/LoginContext';
import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';
import App from '../components/main/App';
 
const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
                    <Header />
                        <Switch>
                            <Route path="/" exact>
                                <Redirect to="/home" />
                            </Route>
                            <PrivateRoute path="/home" component={ App }/>
                            <LoginRoute path="/login" component={ LoginPage } />
                            <Route path="*" component={ App } />
                        </Switch>
        </LoginContextProvider>
    </BrowserRouter>
)

export default AppRouter;