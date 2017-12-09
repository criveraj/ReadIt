import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth';
import {Redirect} from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';


class Header extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      SiteText: 'RI',
      loginText: 'Log In',
      signupText: 'Sign Up',
      userWelcomeText: 'Hello ',
      redirect: false,
    };

    this.onLogOutClicked = this.onLogOutClicked.bind(this);
    
  }    

  onLogOutClicked()
  {
    Auth.deauthenticateUser();
    
  }

  render() {
    return (


      

    <div className="top-bar">

      

        <div className="top-bar-left">
                <Link to="/">{this.state.SiteText}</Link>   
        </div>


        <div>
        {Auth.isUserAuthenticated() == true ? (

            <div className="top-bar-left">

              {/*{this.state.userWelcomeText} {JSON.parse(localStorage.getItem('usrname')).name}!*/}

            </div>  
            ):
            (

            <div>
            </div>  

            )}

        </div>

        <div className="top-bar-left">
            {/* <button onClick={this.onLanguageSettingClicked}> */}
              <Link to="/" onClick={this.onLanguageSettingClicked}>{this.state.LangBtnText}</Link>   

              {/* {this.state.LangBtnText} */}
            {/* </button> */}
        </div>  

        {Auth.isUserAuthenticated() == false ? (
        <div className="top-bar-right">
                 <Link to="/login">{this.state.loginText}</Link> 
                 <Link to="/signup">{this.state.signupText}</Link>   
        </div>
        ):  
        (
        <div className="top-bar-right">
                 <Link to="/login" onClick={this.onLogOutClicked}>Log Out</Link> 
        </div>
        )
        }

    </div>
    
    );
  }
}

export default Header