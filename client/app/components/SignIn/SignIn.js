import React, { Component } from "react";
import "whatwg-fetch";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { Link } from "react-router-dom";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmail: "",
      signUpPassword: "",
      signInStateOp: false
    };

    this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(
      this
    );
    this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(
      this
    );
    this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(
      this
    );
    this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(
      this
    );
    this.onTextBoxChangeSignUpFirstName = this.onTextBoxChangeSignUpFirstName.bind(
      this
    );
    this.onTextBoxChangeSignUpLastName = this.onTextBoxChangeSignUpLastName.bind(
      this
    );

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
    this.mapRoute = this.mapRoute.bind(this);
    this.dashRoute = this.dashRoute.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");

    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      console.log(token);
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
            console.log("success", token);
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }
  onTextBoxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }
  onTextBoxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }
  onTextBoxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }
  onTextBoxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }
  onTextBoxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value
    });
  }
  onTextBoxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value
    });
  }

  onSignUp() {
    //grab state

    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

    this.setState({
      isLoading: true
    });
    //post request to backend
    fetch("/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: "",
            signUpFirstName: "",
            signUpPassword: "",
            signUpLastName: ""
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  }
  onSignIn() {
    //grab state

    const { signInEmail, signInPassword } = this.state;

    this.setState({
      isLoading: true
    });
    //post request to backend
    fetch("/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          // console.log("token", json.token);
          setInStorage("the_main_app", { token: json.token });
          this.setState(
            {
              signInError: json.message,
              isLoading: false,
              signInEmail: "",
              signInPassword: "",
              token: json.token,
              signInStateOp: json.op1
            },
            () => {
              // this.props.history.push("map");
            }
          );
        } else {
          console.log(json);
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  }

  mapRoute() {
    console.log("here");
    this.props.history.push("map");
  }
  dashRoute() {
    console.log("here");
    this.props.history.push("operator_dash");
  }
  logout() {
    this.setState({
      isLoading: true
    });
    const obj = getFromStorage("the_main_app");

    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      console.log(token);
      fetch("/api/account/logout?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }
  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signInStateOp,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>LOADING!!</p>
        </div>
      );
    }

    if (!token) {
      return (
        <div>
          <div className="center">
            {/* <label className="f3 pt5 black b db mb2 tc lh-title">Sign In</label> */}
            <article className="mw6 center bg-white br4 pa3 pa4-ns mv6 ba b--black-10 tc b--dark-green">
              <div className="tc">
                <h1 className="f4 dim">Welcome To NMCG</h1>
                <hr className="mw3 bb bw1 b--black-10" />
              </div>
              <input
                className="black mb2 bg-light-green br3 w-70 lh-copy center f5 black-70 b--dark-green"
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={this.onTextBoxChangeSignInEmail}
              />
              <br />
              <input
                className="black mb2  bg-light-green br3 w-70 lh-copy center f5 black-70 b--dark-green"
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={this.onTextBoxChangeSignInPassword}
              />
              <br />
              <button
                onClick={this.onSignIn}
                className="f6 link dim br3 ba bw2 ph3 bg-light-green pv2 mb2 dib b--dark-green">
                Sign In
              </button>
              {signInError ? <p>{signInError}</p> : null}
            </article>
          </div>
          <br />
          <br />
          {/* <div>
            {signUpError ? <p>{signUpError}</p> : null}
            <p>Sign Up!!</p>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-50"
              type="text"
              placeholder="First Name"
              value={signUpFirstName}
              onChange={this.onTextBoxChangeSignUpFirstName}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              value={signUpLastName}
              onChange={this.onTextBoxChangeSignUpLastName}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextBoxChangeSignUpEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextBoxChangeSignUpPassword}
            />
            <br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div> */}
        </div>
      );
    }

    return (
      <div>
        {!this.state.signInStateOp ? (
          <div>
            <p> Go to Map </p>
            <button onClick={this.mapRoute}>Go</button>
            <button onClick={this.logout}>Log Out</button>
          </div>
        ) : (
          <div>
            <p>Welcome to the Operator Dashboad</p>
            <button onClick={this.dashRoute}>Click to proceed</button>
            <button onClick={this.logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}
export default SignIn;
