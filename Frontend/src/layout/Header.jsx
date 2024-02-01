import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search/Search';
import { useNavigate } from 'react-router-dom';
import { SlBasket, SlLocationPin } from "react-icons/sl";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(false)
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between p-6 bg-white shadow">
            <div className="flex items-center space-x-16">
                <div className='cursor-pointer' onClick={() => navigate("/")}>
                    <img className='h-7' src="/logo.png" alt="logo" />
                </div>
                <Search />
                <div className="space-x-2 flex items-center justify-center">
                    <div className="flex items-center justify-center mr-5">
                        <SlLocationPin color='orange' />
                        <p className='ml-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer text-left z-10'>Turkey</p>
                    </div>
                    <button onClick={() => navigate("/auth")} >Login</button>
                </div>
                <div className="space-x-1">
                    <div className="relative text-left z-10 text-gray-600 hover:text-gray-900 cursor-pointer -mr-44 w-8 h-8 rounded-full flex items-center justify-center">
                        <button onClick={user ? () => setIsOpen(!isOpen) : () => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
                            <img className='h-8 w-8 rounded-full' src={`/user.jpg`} alt="user" />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Profile</Link>
                                    {user && <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Admin</Link>}

                                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">LogOut</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="basket relative">
                    <SlBasket size={24} />
                    <span className='text-xs text-red-500 ml-1 font-bold rounded-full px-1 w-5 flex items-center justify-center py-0.5 bg-red-100 absolute -top-3 -right-3'>1</span>
                </div>
            </div>

        </nav>
    );
};

export default Header;
