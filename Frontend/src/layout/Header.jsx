import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search/Search';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-6 bg-white shadow">
            <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Logo</span>
                <Search />
                <div className="space-x-2">
                    <Link to={"/"} className="text-gray-600 hover:text-gray-900">Link One</Link>
                    <Link to={"/"} className="text-gray-600 hover:text-gray-900">Link Two</Link>
                    <Link to={"/"} className="text-gray-600 hover:text-gray-900">Link Three</Link>
                    <div className="relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
                            Link Four
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sublink One</Link>
                                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sublink Two</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="space-x-2">
                <button>Button</button>
                <button>Button</button>
            </div>
        </nav>
    );
};

export default Header;
