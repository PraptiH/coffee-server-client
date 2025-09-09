import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';
import AuthProvider from '../context/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, createUser2 } = use(AuthContext)
    console.log(createUser)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)

        const { email, password, ...userProfile } = Object.fromEntries(formData.entries())
        console.log(email, password, userProfile)

        createUser(email, password)
            .then(result => {
                console.log(result)

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Your account created successfully",
                                icon: "success",
                                draggable: true,
                                timer : 1500
                            });

                        }
                        console.log("After profile Save", data)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignUp = () => {
        createUser2(auth, AuthProvider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 mx-auto max-w-lg items-center shrink-0 shadow-2xl mt-50">
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <h1 className="text-5xl font-bold mb-10 text-center">Sign Up now!</h1>
                    <label className="font-medium text-lg label">Name</label>
                    <input type="text" name="name" className="font-medium text-lg input" placeholder="Name" />

                    <label className="font-medium text-lg label">Email</label>
                    <input type="email" name="email" className="font-medium text-lg input" placeholder="Email" />

                    <label className="font-medium text-lg label">Address</label>
                    <input type="text" name="address" className="font-medium text-lg input" placeholder="Address" />

                    <label className="font-medium text-lg label">Phone Number</label>
                    <input type="number" name="number" className="font-medium text-lg input" placeholder="Phone Number" />

                    <label className="font-medium text-lg label">Photo URL</label>
                    <input type="text" name="photo url" className="font-medium text-lg input" placeholder="Photo URL" />

                    <label className="font-medium text-lg label">Password</label>
                    <input type="password" name='password' className="font-medium text-lg input" placeholder="Password" />

                    <div><a className="link link-hover font-medium text-lg">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4 font-medium text-lg">Sign Up</button>
                    <p className='font-medium text-lg text-center'>Or</p>
                    <button onClick={handleGoogleSignUp} className="btn btn-neutral mb-4 text-lg font-medium">Sign Up With Google</button>
                    <div className='flex'>
                        <p className='font-medium text-lg'>Already have an account</p>
                        <Link className='font-medium text-lg text-blue-600' to="/signin">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignUp;