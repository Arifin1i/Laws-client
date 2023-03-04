import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';
import GoogleSignIn from './GoogleSignIn';

const LogIn = () => {
    useTitle('login')

    const [success, setSuccess] = useState(false)
    // Authprovider er link chara
    // const auth = getAuth(app)
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        setSuccess(false);
        // const navigate = useNavigate();
       
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // Authprovider er link chara
        // signInWithEmailAndPassword(auth, email, password)
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true);
                form.reset();
                navigate('/home')

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <p className="py-6 text-3xl ">Logging mechanisms and the ability to track user activities are critical in preventing, detecting, or minimizing the impact of a data compromise. The presence of logs in all environments allows thorough tracking, alerting, and analysis when something does go wrong.</p>
                    <p className="py-6 text-5xl ">You must log in to to private activity</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form
                        onSubmit={handleLogin}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>

                    </form>
                    {
                        success && <p>Welcome to CUuuuuuuuum</p>
                    }
                    <h2 className='text-center mb-5'> New to Genius car <Link to='/signup' className='text-orange-700'>Signup</Link> </h2>
                    <hr></hr>
                    <GoogleSignIn></GoogleSignIn>
                </div>

            </div>

        </div>
    );
}
export default LogIn;