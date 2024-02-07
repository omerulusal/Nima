import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black px-8 py-12">
            <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-8">
                <div>
                    <h6 className="font-bold mb-2">
                        <img className='h-7' src="/logo.png" alt="logo" />
                    </h6>
                    <p className="mb-2">Join our newsletter to stay up to date on features and releases.</p>
                    <form className="mb-4">
                        <input className="w-full px-4 py-2 rounded-md" type="email" placeholder="Enter your email" />
                        <button className="w-full px-4 py-2 mt-2 bg-blue-500 rounded-md text-white">Subscribe</button>
                    </form>
                    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                <div>
                    <h6 className="font-bold mb-2">Column One</h6>
                    <ul className="space-y-2">
                        <li>Link One</li>
                        <li>Link Two</li>
                        <li>Link Three</li>
                        <li>Link Four</li>
                        <li>Link Five</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-2">Column Two</h6>
                    <ul className="space-y-2">
                        <li>Link Six</li>
                        <li>Link Seven</li>
                        <li>Link Eight</li>
                        <li>Link Nine</li>
                        <li>Link Ten</li>
                    </ul>
                </div>
            </div>
            <hr className="my-8" />
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <h6 className="font-bold mb-2">Follow us</h6>
                    <div className="flex space-x-4">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>
                <div>
                    <p>© 2024 NIMA. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
