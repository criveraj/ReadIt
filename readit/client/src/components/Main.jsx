import React from 'react';

import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import Home from './HomePage.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';




class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLanguage: localStorage.getItem('currentLanguage'),
            // localStorage.

        };

    }

    render() {
        var title = localStorage.getItem('currentLanguage') == 'Eng' ? 'Website title' : '网站标题';
        var subtitle = localStorage.getItem('currentLanguage') == 'Eng' ?
            'This is the home page. Log in to see the hidden content' :
            '这里是主页，请登录查看更多内容';
  

        return (
            <main>

                <Switch>
                    {/* <Route exact path='/' component={Home}/>    */}
                    {/* <Route exact path='/' render={() => <Home cardtitleP="Website Title" cardsubtitleP="This is the home page. Log in to see the hidden content"/>}/> */}
                    <Route exact path='/' render={() => <Home cardtitleP={title} cardsubtitleP={subtitle} />} />
                    {/* <Route exact path='/' render={renderTarget}/>   */}
                    {/* {homeRoute} */}

                    {/* <Router path="/somePath" render={() => <SomeComponent someProp={prop} />} />       */}
                    {/* <Route path='/roster' component={Roster}/>
              <Route path='/schedule' component={Schedule}/> */}

                    {/* {Auth.isUserAuthenticated() ? (
              <div>    
              <Route path='/login' component={LoginPage}/>
              </div>      
              ):
              (
              <div>    
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={SignUpPage}/>
              </div>      
              )
              } */}
                    <Route path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignUpPage} />

                </Switch>

            </main>

        )


    }



}

export default Main
