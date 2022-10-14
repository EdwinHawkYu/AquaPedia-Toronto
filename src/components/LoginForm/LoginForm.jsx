import { Component } from "react";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
      // 3. decode fetch response: get jwt token from srv
      let token = await fetchResponse.json() 
      // 4. Stick token into localStorage
      localStorage.setItem('token', token);  
      // 5. Decode the token + put user document into state
      const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
      this.props.setUserInState(userDoc)
      
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div className="container-sm">
        <div className="d-flex justify-content-center">
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            >
              <label>Email</label>
              <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder='Enter Email'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              </div>
              <label>Password</label>
              <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              </div>
              <button className="btn btn-outline-secondary btn-lg w-100 mt-2" type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}