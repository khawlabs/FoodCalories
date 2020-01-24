import React, { Component } from "react";
//import './App.css';
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';

class Login extends Component {
  state = {
    redirect: false
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
        
  }
  
  render() {
    
    const responseGoogle = (response) => {
      console.log(response);
      if (response.error !== "popup_closed_by_user") {
        this.setState({
          redirect: true
        })}
    
    }

    const responseFacebook = response => {
      console.log(response);
      if (response.status !== "unknown") {
      this.setState({
        redirect: true
      })}
      // this.renderRedirect();
      
      /*
      if (response.status !== "unknown") 
      {
         
          else {
            
              return<Redirect to="/" />;
          }*/
          
      //console.log(response);
    };

    return (
      <div className="App">
      <div className="row justify-content-center">

        {responseFacebook}
        <FacebookLogin
        appId="1459213397567038" 
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn btn-primary"
        />
        {this.renderRedirect()}
     <br></br>

      <GoogleLogin
        clientId="86369483405-smsati33abjg5r7er8eb36vis4e3j8i9.apps.googleusercontent.com" 
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      
        </div>
      </div>
    );
  }
}

export default Login;