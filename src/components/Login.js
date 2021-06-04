import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../stylesheets/Login.css'
import { auth } from '../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();//this stops the restart
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' onChange={e => setEmail(e.target.value)} value={email} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={login} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
