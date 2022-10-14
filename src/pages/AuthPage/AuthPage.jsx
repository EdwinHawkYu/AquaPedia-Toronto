import { Component } from "react";
import { Button } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './AuthPage.css'

export default class AuthPage extends Component {
  
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="AuthPage d-flex align-items-center justify-content-center">
        <div>
          <div>
            <h3 className='pointer' data-bs-toggle='tooltip' title="Click to Switch!" onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
              {this.state.showLogin ? "LOG IN" : "SIGN UP"}
            </h3>
            {/* <Button className='m-2'>Login</Button>
            <Button className='m-2'>Sign Up</Button> */}
          </div>
          <div>
          {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
          ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
          )}
          </div>
        </div>
      </main>
    );
  }
}