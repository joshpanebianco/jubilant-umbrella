import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './context/auth';

function LogIn() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios.post("http://localhost:3000/users", {
      userName,
      password,
    }).then(result => {
      console.log(result);
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      console.log("crash");
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <h2>Log In</h2>
      <form>
        <input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <input type="submit" onClick={postLogin} />
      </form>
      <Link to='/signup'>Don't have an account?</Link>
        { isError &&<p>The username or password provided were incorrect</p>}
    </div>
  )
}

// class LogIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       isError: false,
//       userName: '',
//       password: '',
//       AuthTokens: '',
//     };
//
//     const AuthTokens = useContext(AuthContext);
//     this.setState({AuthTokens: AuthTokens});
//
//     const postLogin = () => {
//       axios.post("http://localhost:3000/users", {
//         userName: this.state.userName,
//         password: this.state.password,
//       }).then(result => {
//         if (result.status === 200) {
//           const AuthTokens = useContext(result.data);
//           this.setState({AuthTokens: AuthTokens});
//           this.state.setState({isLoggedIn: true});
//         } else {
//           this.state.setState({isError: true});
//         }
//       }).catch(e => {
//         this.state.setState({isError: true});
//       });
//     }
//
//     if (this.state.isLoggedIn) {
//       return <Redirect to='/' />;
//     }
//
//     this.postLogin = this.postLogin.bind(this);
//
//   }
//
//
//   render() {
//     return (
//       <div>
//         <h2>Log In</h2>
//         <form>
//           <input
//             type="username"
//             value={this.state.userName}
//             onChange={e => {this.setState({userName: e.target.value});}}
//             placeholder="email"
//           />
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={e => {this.setState({password: e.target.value});}}
//             placeholder="password"
//           />
//           <input type="submit" onClick={this.postLogin} />
//         </form>
//         <Link to='/signup'>Don't have an account?</Link>
//           { this.state.isError &&<p>The username or password provided were incorrect</p>}
//       </div>
//     );
//   }
// }

export default LogIn;
