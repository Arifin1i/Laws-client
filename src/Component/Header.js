import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100  bg-orange-700">
                <div className="flex-1">
 
                    <Link to = '/' className="text-white normal-case text-xl my-4" >Law Firm</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 my-4">
                        
                       <li><Link to='/home' className='text-white'> Home </Link> </li>
                        <li><Link to='/services' className='text-white'> Services </Link> </li>
                        <li><Link to='/accounts' className='text-white'> Accounts </Link> </li>
                        <li><Link to='/about' className='text-white'> About </Link> </li>
                        <li><Link to='/blog' className='text-white'> Blog </Link> </li>

                     
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;