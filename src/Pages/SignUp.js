import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const SignUp = () => {
    const {createUser} = useContext (AuthContext )
    const handleSignup=e=>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value
        const password =form.password.value
        
        createUser(email, password)
        .then(result=> {
            const user =result.user;
            console.log(user);
        })
            .catch(err=> console.error(err));}
    return (
        <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">

                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-5xl font-bold">Signup now!</h1>
                            <form
                                onSubmit={handleSignup}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <h2 className='text-center mb-5'> Member already <Link to='/login' className='text-orange-700'>Login</Link> </h2>
            
                        </div>
                    </div>
                </div>
    );
};

export default SignUp;