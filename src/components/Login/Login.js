
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword, handleGitHubSignIn, handleGoogleSignIn, initializeLoginFramework, signInUserWithEmailAndPassword } from './loginManager';




const App = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    success: false,
    isSignedIn: false,
    error: "",
    name: "",
    email: "",
    password: ""
  })

  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  // gitHub signIN

  const gitHubSignIn = () => {
    handleGitHubSignIn()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }


  // google login

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }

// signed out

// const signedOut = () => {
//   handleSignOut()
//   .then(res => {
//     setUser(res);
//     setLoggedInUser(res);
//     history.replace(from);
//   })
// }


  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }


  const handleSubmit = (e) => {
    console.log(user.email, user.password)
    if (newUser && user.email && user.password) {
      console.log("submitted")
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })

    }
    if (!newUser && user.email && user.password) {
      console.log("submitted")
      signInUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
    }
    e.preventDefault();
  }

  return (
    <div className="main-card">
      <div className="card">
        <div className="inner-box">
          <h2 className="title">{newUser ? "Sign Up" : "Sign In"}</h2>
          <form onSubmit={handleSubmit} >
            {newUser && <input type="text" name="name" className="input-box" placeholder="Name" required />}
            <input onBlur={handleBlur} type="text" name="email" className="input-box" placeholder="Email" required />
            <input onBlur={handleBlur} type="password" name="password" className="input-box" placeholder="Password" required />
            <input type="submit" value="Submit" className="submit" />
          </form>
          <div className="span-container">
            <span className="left">{newUser ? "Already Have An Account?" : "Create New Account?"}</span>
            <span onClick={() => setNewUser(!newUser)} className="right">{!newUser ? "Sign Up" : "Sign In"}</span>
          </div>
          <div className="social-container">
            <p onClick={googleSignIn}><span className="span1"><FontAwesomeIcon icon={faGoogle} /></span> <span>Continue with Google</span></p>
            <p onClick={gitHubSignIn}><span className="span2"><FontAwesomeIcon icon={faGithub} /></span> <span>Continue with GitHub</span></p>

          </div>
        </div>
      </div>
      <p className="error-message">{user.error}</p>
      {user.success && <p className="success-message">Successfully {newUser ? "Create" : "Signed In"} Your Account</p>}
    </div>
  );
};

export default App;
