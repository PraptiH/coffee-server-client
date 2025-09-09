import React from 'react';
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/firebase.init';
import AuthProvider from '../context/AuthProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {

    const { createUser2 } = use(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                alert('log in success')
            })
            .catch(error => {
                console.log(error)
                alert('register first')
            })

    }

    const handleGoogleSignIn = () => {
        createUser2(auth, AuthProvider)
            .then(result => {
                console.log(result)
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl mt-50">
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <h1 className="text-5xl font-bold mb-10 text-center">Sign In now!</h1>
                    <label className="label font-medium text-lg">Email</label>
                    <input type="email " name='email' className="input font-medium text-lg" placeholder="Email" />
                    <label className="label font-medium text-lg">Password</label>
                    <input type="password" name='password' className="input font-medium text-lg" placeholder="Password" />
                    <div><a className="link link-hover font-medium text-lg">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 text-lg font-medium">Sign In</button>
                    <p className='font-medium text-lg text-center'>Or</p>
                    <button type='button' onClick={handleGoogleSignIn} className="btn btn-neutral mb-4 text-lg font-medium">Sign In With Google</button>
                    <div className='flex'>
                        <p className='font-medium text-lg'>Do not have an account</p>
                        <Link className='font-medium text-lg text-blue-600' to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;